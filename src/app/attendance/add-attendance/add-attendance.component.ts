import { Component } from '@angular/core';
import { DataDetails, Departments } from './interfaces/data-details';
import { ApiFetchService } from './services/api-fetch.service';
import { Column } from './interfaces/data-details';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css'],
})
export class AddAttendanceComponent {
  new_data: DataDetails[] = [];
  next_data: DataDetails[] = [];
  post_data: DataDetails[] = [];
  selectedname!: DataDetails;
  cols!: Column[];
  departments!: Departments[];
  attendance!: DataDetails;
  employeeData: DataDetails[] = [];
  PresentOrAbsent: boolean = false;
  tableDisabled: boolean = false;
  submitEnabled: boolean = false;
  withOrWithout: boolean = false;
  submitDisabled: boolean = false;

  constructor(private apiLink: ApiFetchService) {}

  ngOnInit() {
    this.apiLink.getData().subscribe((res: DataDetails[]) => {
      this.new_data = res;
      this.next_data = res;
      this.new_data.forEach((x) => {
        x.present = false;
        x.absent = false;
        x.withPermission = false;
        x.withoutPermission = false;
        x.reason = '';
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
    this.PresentOrAbsent = this.new_data.every(
      (item) => item.present || item.absent
    );
    if (this.PresentOrAbsent == true) {
      this.submitEnabled = true;
    }
  }
  onSubmit() {
    this.submitDisabled = true;
    this.tableDisabled = true;
    this.apiLink
      .addAttendance(this.new_data)
      .subscribe((data: DataDetails[]) => {
        this.post_data = data;
        console.log(this.post_data);
      });
  }
  isPresent(val: any) {
    this.checkBoxStatus();
  }
  isAbsent(val: any) {
    this.checkBoxStatus();
  }
}
