import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { EmployeeDashboardComponent } from './Employee-Dashboard/Employee-Dashboard.component';
import { InactiveEmployeeComponent } from './inactive-employee/inactive-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EmployeeDashboardComponent,
    InactiveEmployeeComponent,
    ProfileDetailsComponent
  ],
  imports: [CommonModule, EmployeeDetailsRoutingModule, SharedModuleModule],
})
export class EmployeeDetailsModule {}
