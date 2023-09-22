import { Component } from '@angular/core';
import { EmployeData } from '../interface/employe-data';
import { LeftoverTableService } from './Services/leftover-table.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-inactive-employee',
  templateUrl: './inactive-employee.component.html',
  styleUrls: ['./inactive-employee.component.css'],
})
export class InactiveEmployeeComponent {
  leftoverdatas: EmployeData[] = [];
  visible: boolean = false;
  individualData: any = {};
  disabled = false;
  activating!: string;
  EmpnameFordis: string = '';
  clearthebar: string = '';

  constructor(private LinkData: LeftoverTableService) {}
  ngOnInit() {
    this.LinkData.employeeDataFn().subscribe((res: EmployeData[]) => {
      this.leftoverdatas = res.filter((resp) => resp.Active == false);
    });
  }

  clearFn(table: any) {
    this.clearthebar = '';
    table.clear();
  }

  activateFn(lefted: EmployeData) {
    console.log(lefted);
    this.visible = false;
    this.activating = '';
  }

  indiviActiveFn(lefted: EmployeData) {
    this.visible = true;
    this.individualData = lefted;
    this.EmpnameFordis = lefted.employeeName;
    this.activating = '';
  }

  toggleActiveFn() {
    if (this.activating == 'true') {
      this.individualData.Active = true;
      this.LinkData.updateDataFn(this.individualData).subscribe(
        (x: EmployeData) => {
          const updatedDetails = this.leftoverdatas.filter(
            (x1: EmployeData) => x.id !== x1.id
          );
          this.leftoverdatas = updatedDetails;
        }
      );
      this.visible = false;
      this.activating = '';
    } else {
      this.individualData.Active = false;
      this.visible = false;
      this.activating = '';
    }
  }
}
