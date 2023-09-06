import { Component } from '@angular/core';
import { EmployeData } from '../interface/employe-data';
import { LeftoverTableService } from './Services/leftover-table.service';
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
    this.LinkData.employeeDataFn().subscribe((res: EmployeData[]) => {
      this.leftoverdatas = res;
      console.log(this.leftoverdatas);
    });
  }

  activateFn(lefted: EmployeData) {
    this.visible = true;
    this.individualData = lefted;
    console.log(this.individualData);
  }
}
