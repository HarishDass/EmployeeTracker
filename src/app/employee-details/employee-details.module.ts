import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ActivePageComponent } from './active-page/active-page.component';
import { EmployeeDashboardComponent } from './Employee-Dashboard/Employee-Dashboard.component';
import { InactiveEmployeeComponent } from './inactive-employee/inactive-employee.component';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    AddDetailsComponent,
    ActivePageComponent,
    EmployeeDashboardComponent,
    InactiveEmployeeComponent,
  ],
  imports: [CommonModule, EmployeeDetailsRoutingModule, SharedModuleModule],
})
export class EmployeeDetailsModule {}
