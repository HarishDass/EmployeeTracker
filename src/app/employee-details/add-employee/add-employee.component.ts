import { Component } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { EmployeeServiceService } from '../../employee-service.service';
import Swal from 'sweetalert2';

interface department {
  department: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  myForm: FormGroup;
  departments: department[] | undefined;
  uploadedPhoto: string | ArrayBuffer | null = null;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private employee: EmployeeServiceService
  ) {
    this.myForm = this.fb.group({
      employeeName: [
        '',
        Validators.required
      ],
      dateOfBirth: ['', Validators.required],
      mobileNo: ['', Validators.required],
      nationality: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      department: [null, Validators.required],
      gender: ['', Validators.required],
      active: ['', Validators.required],
      address: this.fb.group({
        address_line1: ['', Validators.required],
        address_line2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pincode: ['', Validators.required],
      }),
      fatherName: ['', Validators.required],
      EmployeeNo: ['', Validators.required],
      photo: [''],
      qualification: ['', Validators.required],
      CTC: ['', Validators.required],
      email: ['', Validators.required],
      experience: ['', Validators.required],
      yearOfExperience: this.fb.array([
      ]),
      emergencyContactNumber: ['', Validators.required],
      panNumber: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.departments = [
      { department: 'Select Department' },
      { department: 'HR' },
      { department: 'Frontend Developer' },
      { department: 'Backend Developer' },
      { department: 'Tester' },
      { department: 'Team Leader' },
      { department: 'Cypersecurity' },
    ];
  }

  get f() {
    return this.myForm.controls;
  }

  get address(): FormGroup {
    return this.myForm.get('address') as FormGroup;
  }

  get ad() {
    return this.address.controls;
  }
  get companyName() {
    return this.yearOfExperience.get('companyName');
  }

  get yearOfExperience() {
    return this.myForm.get('yearOfExperience') as FormArray;
  }
  get exp() {
    return this.yearOfExperience.controls;
  }

  experienceDetails(): FormGroup {
    return this.fb.group({
      years: ['', Validators.required],
      companyName: ['', Validators.required],
      joinDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  addExperience() {
    this.yearOfExperience.push(this.experienceDetails());
  }

  delExperience() {
    let control = <FormArray>this.myForm.controls['yearOfExperience'];
    control.removeAt(control.length - 1);
    // this.yearOfExperience.removeAt(index - 1)
  }

  experienceRequired(event: any) {
    if (event.checked) {
      this.myForm.controls['yearOfExperience'].setValidators([
        Validators.required,
      ]);
      this.myForm.controls['yearOfExperience'].updateValueAndValidity();
    } else {
      this.myForm.controls['yearOfExperience'].setValidators(null);
      this.myForm.controls['yearOfExperience'].updateValueAndValidity();
    }
  }

  onFileSelect(event: any) {
    const file = event.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedPhoto = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.submitted = true;
    const formData1 = this.myForm.value;
    formData1.photo = this.uploadedPhoto;
    
    console.log(this.myForm);
    if (this.myForm.invalid) {
      Swal.fire('Sorry!', 'Please Enter all fields!', 'error');
      return;
    }
    else if (this.myForm.valid) {
      this.employee
        .saveEmployeeData(formData1)
        .subscribe((res) => console.log(res));
      Swal.fire('Thank You!', 'Successfully Submitted!', 'success');
    }
  }

  onReset() {
    this.submitted = false;
    this.myForm.reset();
    Swal.fire('Reset!', 'Successfully Reseted!', 'success');
  }
}
