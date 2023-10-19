import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  pages = [
    { name: 'Dashboard', path: 'Dashboard' },
    { name: 'Add Details', path: 'AddDetails' },
    { name: 'Active Page', path: 'activePage' },
    { name: 'Inactive', path: 'inActivePage' },
  ];
}
