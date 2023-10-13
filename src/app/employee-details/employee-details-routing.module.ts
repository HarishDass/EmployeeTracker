import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeDashboardComponent } from './Employee-Dashboard/Employee-Dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsComponent,
    children: [
      {
        path: '',
        component: EmployeeDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeDetailsRoutingModule {}
