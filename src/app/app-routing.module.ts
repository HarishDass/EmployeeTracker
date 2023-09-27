import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './employee-details/profile-details/profile-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'Attendance',
    loadChildren: () =>
      import('./attendance/attendance.module').then((m) => m.AttendanceModule),
  },
  {
    path: 'EmployeeDetails',
    loadChildren: () =>
      import('./employee-details/employee-details.module').then(
        (m) => m.EmployeeDetailsModule
      ),
  },
  { path: 'update', component: AttendanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
