import { Component } from '@angular/core';
import { EmployeData } from 'src/app/shared-module/interface/employe-data';
import { LeftoverTableService } from 'src/app/shared-module/Services/leftover-table.service';
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
    this.GetDataFn();
  }

  GetDataFn() {
    this.LinkData.employeeDataFn().subscribe((Firstresponce: EmployeData[]) => {
      this.leftoverdatas = Firstresponce.filter(
        (responce) => responce.Active == false
      );
    });
  }

  indiviActiveFn(lefted: EmployeData) {
    this.visible = true;
    this.individualData = lefted;
    console.log(this.individualData);
  }

  toggleActiveFn() {
    this.individualData.Active = true;
    this.LinkData.updateDataFn(this.individualData).subscribe(
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

  toggleNotActiveFn() {
    this.visible = false;
  }
}
