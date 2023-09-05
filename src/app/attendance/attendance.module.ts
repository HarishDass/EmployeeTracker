import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { InactiveComponent } from './inactive/inactive.component';

@NgModule({
  declarations: [AttendanceComponent, InactiveComponent],
  imports: [CommonModule, AttendanceRoutingModule, SharedModuleModule],
})
export class AttendanceModule {}
