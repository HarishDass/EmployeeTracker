import { Component } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
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
      employeeName: ['', Validators.required],
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
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      experience: ['', Validators.required],
      yearOfExperience: this.fb.array([]),
      emergencyContactNumber: ['', Validators.required],
      panNumber: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.departments = this.employee.departments;
  }

  get form() {
    return this.myForm.controls;
  }

  get address(): FormGroup {
    return this.myForm.get('address') as FormGroup;
  }

  get subAddress() {
    return this.address.controls;
  }

  get yearOfExperience(): FormArray {
    return this.myForm.get('yearOfExperience') as FormArray;
  }

  dept(e: any) {
    this.myForm.value.department = e.value.department;
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
    this.myForm.value.photo = this.uploadedPhoto;

    if (this.myForm.invalid) {
      Swal.fire('Sorry!', 'Please Enter all fields!', 'error');
      return;
    } else if (this.myForm.valid) {
      this.employee
        .saveEmployeeData(this.myForm.value)
        .subscribe((res) => console.log(res));
      Swal.fire('Thank You!', 'Successfully Submitted!', 'success');
    }
  }

  onReset() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reset it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.submitted = false;
        this.myForm.reset();
        Swal.fire('Reset!', 'Successfully Reseted!', 'success');
      }
    });
  }
}
