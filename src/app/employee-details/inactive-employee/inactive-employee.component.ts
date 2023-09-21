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
  disabled = false;
  activating!: string;

  constructor(private LinkData: LeftoverTableService) {}
  ngOnInit() {
    this.LinkData.employeeDataFn().subscribe((res: EmployeData[]) => {
      this.leftoverdatas = res.filter((resp) => resp.Active == false);
      console.log(this.leftoverdatas);
    });
  }

  activateFn(lefted: EmployeData) {
    console.log(lefted);
  }

  indiviActiveFn(lefted: EmployeData) {
    this.visible = true;
    this.individualData = lefted;
    // console.log(lefted);
    console.log(this.individualData);
  }

  toggleActiveFn() {
    if (this.activating == 'true') {
      this.individualData.Active = true;
      console.log(this.individualData);
      this.visible = false;
      this.activating = '';
    } else {
      this.individualData.Active = false;
      // console.log(this.individualData);
      this.visible = false;
      this.activating = '';
    }
  }
}
