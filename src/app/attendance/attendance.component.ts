import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent {
  value!: string;
  color: any;
  userName: string = 'guru';
}
