import { Component } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { EmployeeServiceService } from '../../employee-service.service';

interface department {
  dept: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  myForm: FormGroup;
  departments : (department[] | undefined);
  uploadedPhoto: string | ArrayBuffer | null = null;
  initialSubmitButtonState: boolean = true;


  constructor(private employee : EmployeeServiceService) {
  this.myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required),
    date_of_joining: new FormControl('', Validators.required),
    department: new FormControl<department | null>(null, Validators.required),
    gender: new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required),
    address: new FormGroup({
      address_line1: new FormControl('', Validators.required),
      address_line2: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required), 
      pincode: new FormControl('', Validators.required)
    }),
    fathername : new FormControl("", Validators.required),  
    employee_no : new FormControl('', Validators.required),  
    photo : new FormControl("", Validators.required), 
    qualification : new FormControl("", Validators.required),
    ctc : new FormControl("", Validators.required), 
    mail : new FormControl("", Validators.required),   
    experience : new FormControl("", Validators.required),
    experience_details : new FormGroup({
      years : new FormControl("", Validators.required),
      company : new FormControl("", Validators.required),
      joinDate: new FormControl("", Validators.required),
      endDate : new FormControl("", Validators.required)
    }), 
    emergency_Phone : new FormControl("", Validators.required),
    aadhaar : new FormControl("", Validators.required),
    pan : new FormControl("", Validators.required)
  });

  }
     

  ngOnInit() {
    this.initialSubmitButtonState = this.myForm.valid;

    this.departments = [
        { dept: 'Select Department' },
        { dept: 'HR' },
        { dept: 'Frontend Developer' },
        { dept: 'Backend Developer' },
        { dept: 'Tester' },
        { dept: 'Team Leader' },
        { dept: 'Cypersecurity' }
    ];
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
    let formData1 = this.myForm.value;
    formData1.photo = this.uploadedPhoto;  
    this.employee.saveEmployeeData(formData1).subscribe(res=>console.log(res));
  }
  
  onReset(){
    this.myForm.reset();
  }
}
