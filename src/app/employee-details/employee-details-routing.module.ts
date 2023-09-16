import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ActivePageComponent } from './active-page/active-page.component';
import { ViewBarComponent } from './view-bar/view-bar.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsComponent,
    children: [
      {
        path: 'AddDetails',
        component: AddDetailsComponent,
      },
      {
        path: 'viewBar',
        component: ActivePageComponent,
      },
      {
        path: 'inActivePage',
        component: ViewBarComponent,
      },
      {
        path: 'activePage',
        component: ActivePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeDetailsRoutingModule {}
