import { Component } from '@angular/core';
import {
  DataDetails,
  Departments,
  TableHead,
} from '../../shared-module/interface/data-details';
import { ApiFetchService } from 'src/app/shared-module/services/api-fetch.service';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { CheckboxChangeEvent } from 'primeng/checkbox';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css'],
})
export class AddAttendanceComponent {
  employee_data: DataDetails[] = [];
  filter_data: DataDetails[] = [];
  post_data: DataDetails[] = [];
  headers!: TableHead[];
  departments!: Departments[];
  attendance!: DataDetails;
  PresentOrAbsent: boolean = false;
  tableDisabled: boolean = false;
  submitEnabled: boolean = false;
  withOrWithout: boolean = false;
  submitDisabled: boolean = false;
  visible: boolean = false;

  constructor(private apiLink: ApiFetchService) {}

  ngOnInit() {
    this.apiLink.getData().subscribe((res: DataDetails[]) => {
      this.employee_data = res;
      this.filter_data = res;
      this.employee_data.forEach((x) => {
        x.present = false;
        x.absent = false;
        x.withPermission = false;
        x.withoutPermission = false;
        x.reason = '';
        x.AttendanceDate = new Date().toLocaleDateString('en-IN');
      });
    });

    this.headers = [
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
  onDepartmentChange(department: DropdownChangeEvent) {
    if (department.value.name === 'All') {
      this.employee_data = this.filter_data;
    } else {
      this.employee_data = this.filter_data.filter(
        (choiceData: any) => choiceData.deportment === department.value.name
      );
    }
  }
  checkBoxStatus() {
    this.PresentOrAbsent = this.employee_data.every(
      (item) => item.present || item.absent
    );
    if (this.PresentOrAbsent == true) {
      this.submitEnabled = true;
    }
  }
  onSubmit() {
    this.visible = true;
  }
  isPresent(val: CheckboxChangeEvent) {
    this.checkBoxStatus();
  }
  isAbsent(val: CheckboxChangeEvent) {
    this.checkBoxStatus();
  }
  submitStatus() {
    this.visible = false;
    this.submitDisabled = true;
    this.tableDisabled = true;
    this.apiLink
      .addAttendance(this.employee_data)
      .subscribe((data: DataDetails[]) => {
        this.post_data = data;
      });
  }
  cancel() {
    this.visible = false;
  }
}
