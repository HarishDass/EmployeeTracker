import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  pages = [
    { name: 'Add Details', path: 'AddDetails' },
    { name: 'Inactive', path: 'inActivePage' },
    { name: 'View Bar', path: 'viewBar' },
    {
      name: 'Active Page',
      path: 'activePage',
    },
  ];
}
