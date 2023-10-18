import { Component } from '@angular/core';
import { EmployeData } from 'src/app/shared-module/interface/employe-data';
import { LeftoverTableService } from 'src/app/shared-module/services/leftover-table.service';
@Component({
  selector: 'app-inactive-employee',
  templateUrl: './inactive-employee.component.html',
  styleUrls: ['./inactive-employee.component.css'],
})
export class InactiveEmployeeComponent {
  leftoverdatas: EmployeData[] = [];
  visible: boolean = false;
  individualData: any = {};

  constructor(private LinkData: LeftoverTableService) {}
  ngOnInit() {
    this.fetching_emp_data();
  }

  fetching_emp_data() {
    this.LinkData.getting_emp_data().subscribe(
      (raw_emp_details: EmployeData[]) => {
        this.leftoverdatas = raw_emp_details.filter(
          (filtered_inactive_emp_data) =>
            filtered_inactive_emp_data.active == false
        );
      }
    );
  }

  indiviActive(lefted_emp: EmployeData) {
    this.visible = true;
    this.individualData = lefted_emp;
  }

  make_emp_Active() {
    this.individualData.active = true;
    this.LinkData.updateData(this.individualData).subscribe(
      (changingValueofEmp: EmployeData) => {
        const updatedDetails = this.leftoverdatas.filter(
          (changedValueofEmp: EmployeData) =>
            changingValueofEmp.id !== changedValueofEmp.id
        );
        this.leftoverdatas = updatedDetails;
      }
    );
    this.visible = false;
  }

  make_emp_inActive() {
    this.visible = false;
  }
}
