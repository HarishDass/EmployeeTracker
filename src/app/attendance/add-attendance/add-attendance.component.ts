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
  selectedname!: DataDetails;
  cols!: Column[];
  isDisabled: boolean;
  absentDisabled: boolean;
  presentDisabled: boolean;
  bothDisabled: boolean;
  reasonDisabled: boolean;
  withPermissionDisabled: boolean;
  departments!: any[];
  attendance!: DataDetails;
  employeeData: DataDetails[] = [];
  @ViewChild('table') table!: Table;

  constructor(private apiLink: ApiFetchService) {
    this.presentDisabled = false;
    this.absentDisabled = false;
    this.bothDisabled = false;
    this.isDisabled = true;
    this.reasonDisabled = true;
    this.withPermissionDisabled = true;
  }

  ngOnInit() {
    this.refresh();
    this.apiLink.getData().subscribe((res: DataDetails[]) => {
      this.new_data = res;
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
      { name: 'frontend developer' },
      { name: 'backend developer' },
      { name: 'tester' },
      { name: 'HR' },
      { name: 'CyberSecurity' },
    ];
  }
  onDepartmentChange(event: any) {
    this.table.filter(event.value, 'deportment', 'in');
  }
  refresh() {
    this.apiLink.getData().subscribe((data) => {
      console.log(data);
      this.new_data = data;
    });
  }
  onSubmit() {
    this.apiLink.saveUser(this.new_data).subscribe((data) => {
      console.log(data);
      this.refresh();
    });
  }
  isPresent(val: any) {
    // if (val.checked) {
    //   this.absentDisabled = true;
    // } else {
    //   this.absentDisabled = false;
    // }
    console.log(val);
    this.attendance = val;
    this.employeeData.push(this.attendance);
  }

  isAbsent(e: any) {
    console.log(e);

    // if (e.present == false) {
    //   this.presentDisabled = false;
    //   this.isDisabled = false;
    // } else {
    //   this.presentDisabled = true;
    //   this.isDisabled = true;
    // }
    console.log(e);
  }
  withPermission(e: any) {
    console.log(e);

    if (e.absent == true) {
      this.bothDisabled = false;
    } else {
      this.bothDisabled = true;
    }
  }
  withoutPermission(e: any) {
    console.log(e);

    if (e.absent == true) {
      this.withPermissionDisabled = false;
    } else {
      this.withPermissionDisabled = true;
    }
  }
}
