import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';

interface Dept {
    name: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  dept : (Dept[] | undefined);
  selectedDept :( Dept | undefined);


  Register = new FormGroup({
    emp_name : new FormControl(null, Validators.required),
    emp_dob : new FormControl(null, Validators.required),
    emp_phone: new FormControl(null, Validators.required),
    emp_nation : new FormControl(null, Validators.required),
    emp_doj : new FormControl(null, Validators.required),
    emp_gender: new FormControl(null, Validators.required),
    emp_active: new FormControl(null, Validators.required),
    dept: new FormControl(null,Validators.required),
    selectedDept: new FormControl(null, Validators.required),
    Address : new FormGroup({
      addr1 : new FormControl(null, Validators.required),
      addr2: new FormControl(null, Validators.required),
      city : new FormControl(null, Validators.required),
      state : new FormControl(null, Validators.required), 
      pincode : new FormControl(null, Validators.required)
    }),
    emp_fathername : new FormControl(null, Validators.required),  
    emp_no : new FormControl(null, Validators.required),  
    emp_photo : new FormControl(null, Validators.required), 
    emp_quali : new FormControl(null, Validators.required),
    emp_ctc : new FormControl(null, Validators.required),  
    emp_exORfr : new FormControl(null, Validators.required),
    emp_yrOFexp : new FormControl(null, Validators.required),
    emp_expdetails : new FormControl({
      company : new FormControl(null, Validators.required),
      joinDate: new FormControl(null, Validators.required),
      endDate : new FormControl(null, Validators.required),
    }), 
    emp_emerPhone : new FormControl(null, Validators.required),
    emp_adhaar : new FormControl(null, Validators.required),
    emp_pan : new FormControl(null, Validators.required)
  })
  onSubmit() {
    console.log(this.Register.value)
  }
  clearInput() {
    this.Register.reset();
  }
  
  // constructor(private fb: FormBuilder) { };


  ngOnInit() {
    this.dept = [
        { name: 'HR' },
        { name: 'Frontend Developer' },
        { name: 'Backend Developer' },
        { name: 'Tester' },
        { name: 'Team Leader' },
        { name: 'Cypersecurity' }
    ];
}
}
