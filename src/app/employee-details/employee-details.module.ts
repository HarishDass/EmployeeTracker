import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

@NgModule({
  declarations: [EmployeeDetailsComponent, ProfileDetailsComponent],
  imports: [CommonModule, EmployeeDetailsRoutingModule, SharedModuleModule],
})
export class EmployeeDetailsModule {}
