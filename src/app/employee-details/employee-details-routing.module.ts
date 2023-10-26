import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details.component';
import { ActivePageComponent } from './active-page/active-page.component';
import { EmployeeDashboardComponent } from './Employee-Dashboard/Employee-Dashboard.component';
import { InactiveEmployeeComponent } from './inactive-employee/inactive-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsComponent,
    children: [
      {
        path: 'Dashboard',
        component: EmployeeDashboardComponent,
      },
      {
        path: 'AddDetails',
        component: AddEmployeeComponent,
      },
      {
        path: 'activePage',
        component: ProfileDetailsComponent,
      },
      {
        path: 'inActivePage',
        component: InactiveEmployeeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeDetailsRoutingModule {}
