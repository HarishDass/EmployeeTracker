import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ActivePageComponent } from './active-page/active-page.component';
import { EmployeeDashboardComponent } from './Employee-Dashboard/Employee-Dashboard.component';
import { InactiveEmployeeComponent } from './inactive-employee/inactive-employee.component';

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
        component: AddDetailsComponent,
      },
      {
        path: 'activePage',
        component: ActivePageComponent,
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
