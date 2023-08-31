import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'EmployeeDetails', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'Attendance', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
