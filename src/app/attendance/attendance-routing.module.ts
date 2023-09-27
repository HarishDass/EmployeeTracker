import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance.component';
import { HomeComponent } from '../home/home.component';
import { ViewTableComponent } from './view-table/view-table.component';

const routes: Routes = [
  {
    path: '',
    component: AttendanceComponent,
    children: [
      {
        path: 'viewTable',
        component: ViewTableComponent,
      },
      {
        path: 'viewTable',
        component: ViewTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
