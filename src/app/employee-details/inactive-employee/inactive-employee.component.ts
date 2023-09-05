import { Component } from '@angular/core';
import { EmployeData } from '../interface/employe-data';
import { LeftoverTableService } from './Services/leftover-table.service';
import { EmployeTableHeadData } from '../interface/employe-table-head-data';
@Component({
  selector: 'app-inactive-employee',
  templateUrl: './inactive-employee.component.html',
  styleUrls: ['./inactive-employee.component.css'],
})
export class InactiveEmployeeComponent {
  leftoverdatas: EmployeData[] = [];
  statuses: any[] = [
    { label: 'Inactive', value: 'Inactive' },
    { label: 'Active', value: 'Active' },
  ];

  inactive_emp_table_header: EmployeTableHeadData[] = [
    {
      headings: 'Photo',
      field: 'Photo',
    },
    {
      headings: 'Name',
      field: 'employeeName',
    },
    {
      headings: 'Employee Code',
      field: 'EmployeeNo',
    },
    {
      headings: 'Department',
      field: 'deportment',
    },
    {
      headings: 'Active Status',
      field: 'Active',
    },
  ];

  constructor(private LinkData: LeftoverTableService) {}
  ngOnInit() {
    this.LinkData.employeeDataFn().subscribe((res: EmployeData[]) => {
      this.leftoverdatas = res;
      console.log(this.leftoverdatas);
    });
  }
  ansData: string = '';
  getSeverity(status: boolean) {
    if (status == false) {
      this.ansData = 'Inactive';
      return 'warning';
    } else {
      this.ansData = 'Active';
      return 'success';
    }
  }
  getSeverityFn(value: string) {
    if (value == 'Inactive') {
      return 'warning';
    } else {
      return 'success';
    }
  }
}
