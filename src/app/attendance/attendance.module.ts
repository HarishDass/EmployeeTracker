import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';

@NgModule({
  declarations: [AttendanceComponent,
    AddAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    SharedModuleModule,
  ],
  exports:[]
})
export class AttendanceModule {}
