import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardDetails } from '../shared-module/interface/employe-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cardData: CardDetails[] = [
    {
      cardName: 'Employee Details',
    },
    {
      cardName: 'Attendance',
    },
  ];

  constructor(private router: Router) {}

  navigateTO(module: any) {
    this.router.navigate([module.replace(' ', '')]);
  }
}
