import { Component, ViewChild } from '@angular/core';
import { DataDetails } from './interfaces/data-details';
import { ApiFetchService } from './services/api-fetch.service';
import { ViewportScroller } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

interface Column {
  header: string;
}
@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css'],
  providers: [MessageService],
})
export class AddAttendanceComponent {
  new_data: DataDetails[] = [];
  next_data: DataDetails[] = [];
  selectedname!: DataDetails;
  cols!: Column[];
  departments!: any[];
  attendance!: DataDetails;
  employeeData: DataDetails[] = [];
  @ViewChild('table') table!: Table;
  Attendance: boolean = false;
  tableDisabled: boolean = false;
  submitEnabled: boolean = false;
  constructor(private apiLink: ApiFetchService) {}
  ngOnInit() {
    this.apiLink.getData().subscribe((res: DataDetails[]) => {
      this.new_data = res;
      this.next_data = res;
      console.log(this.new_data);
      this.new_data.forEach((x) => {
        x.present = false;
        x.absent = false;
        x.withPermission = false;
        x.withoutPermission = false;
        x.AttendanceDate = new Date().toLocaleDateString('en-IN');
      });
    });

    this.cols = [
      { header: 'Photo' },
      { header: 'Date' },
      { header: 'Employee Name' },
      { header: 'Employee ID' },
      { header: 'Department' },
      { header: 'Present / Absent' },
      { header: ' Permission' },
      { header: 'Reason' },
    ];
    this.departments = [
      { name: 'All' },
      { name: 'frontend developer' },
      { name: 'backend developer' },
      { name: 'tester' },
      { name: 'HR' },
      { name: 'CyberSecurity' },
    ];
  }
  onDepartmentChange(dept: any) {
    if (dept.value.name === 'All') {
      this.new_data = this.next_data;
    } else {
      this.new_data = this.next_data.filter(
        (dem: any) => dem.deportment === dept.value.name
      );
    }
  }
  checkBoxStatus() {
    this.Attendance = this.new_data.every(
      (item) => item.present || item.absent
    );
    if (this.Attendance == true) {
      this.submitEnabled = true;
    }
  }
  onSubmit() {
    this.tableDisabled = true;
    this.apiLink.saveUser(this.new_data).subscribe((data) => {
      console.log(data);
    });
  }
  isPresent(val: any) {
    this.checkBoxStatus();
    console.log(val);
    this.attendance = val;
    this.employeeData.push(this.attendance);
  }
  isAbsent(e: any) {
    this.checkBoxStatus();
    console.log(e);
  }
  withPermission(e: any) {}
  withoutPermission(e: any) {}
}
