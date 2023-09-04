import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from 'src/app/employee-details.service';
import { EmployeesTypes } from 'src/assets/data/employeeAttendance';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css'],
})
export class ViewTableComponent implements OnInit {
  employeeDetails: Array<EmployeesTypes> = [];
  constructor(private employeeInfo: EmployeeDetailsService) {}
  ngOnInit(): void {
    this.employeeInfo
      .getData()
      .subscribe((data: any) => (this.employeeDetails = data));
  }
}
