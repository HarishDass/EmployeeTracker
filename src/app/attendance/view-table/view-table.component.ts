import { Component, Input } from '@angular/core';
import { Table } from 'primeng/table';
import { EmployeeDetailsService } from 'src/app/employee-details.service';
import { EmployeesTypes } from 'src/assets/data/employeeAttendance';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css'],
  providers: [MessageService],
})
export class ViewTableComponent {
  employeeDetails: Array<EmployeesTypes> = [];
  statuses!: any[];

  constructor(
    private employeeInfo: EmployeeDetailsService,
    public http: EmployeeDetailsService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.employeeInfo.getData().subscribe((data: any) => {
      this.employeeDetails = data;
      this.employeeDetails.forEach(
        (empdate: any) => (empdate.date = new Date(<Date>empdate.date))
      );
    });
    this.statuses = [
      { label: 'Present', value: 'present' },
      { label: 'Absent', value: 'absent' },
    ];
  }
  clear(table: Table) {
    table.clear();
  }

  request(details: EmployeesTypes) {
    let user = {
      email: details.Email,
      reason: details.Reason,
      name: details.EmployeeName,
      department: details.Department,
      date: details.Date,
    };
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Email Sent Successfully',
    });
    this.http
      .sendEmail('http://localhost:5000/sendmail', user)
      .subscribe((data: any) => {
        data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${[
            user.email,
          ]} is successfully register and mail has been sent `
        );
      });
  }
}
