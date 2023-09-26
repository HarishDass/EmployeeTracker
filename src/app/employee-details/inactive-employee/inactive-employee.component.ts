import { Component } from '@angular/core';
import { EmployeData } from 'src/app/shared-module/employe-data';
import { LeftoverTableService } from 'src/app/Services/leftover-table.service';
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
  activating!: string;

  constructor(private LinkData: LeftoverTableService) {}
  ngOnInit() {
    this.LinkData.employeeDataFn().subscribe((res: EmployeData[]) => {
      this.leftoverdatas = res.filter((resp) => resp.Active == false);
    });
  }

  activateFn(lefted: EmployeData) {
    console.log(lefted);
    this.visible = false;
    this.activating = '';
  }

  indiviActiveFn(lefted: EmployeData) {
    this.visible = true;
    this.individualData = lefted;
    this.activating = '';
  }

  toggleActiveFn() {
    if (this.activating == 'true') {
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
      this.activating = '';
    } else {
      this.individualData.Active = false;
      this.visible = false;
      this.activating = '';
    }
  }
}
