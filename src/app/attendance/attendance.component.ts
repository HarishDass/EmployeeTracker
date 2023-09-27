import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent {
  value!: string;
  color: any;

  pages = [
    { name: 'Attendance', path: 'home' },
    { name: 'View Table', path: 'viewTable' },
  ];
  userName: string = 'guru';
}
