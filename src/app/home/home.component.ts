import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carddetailsinarr } from '../shared-module/carddetailsinarr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cardData: Carddetailsinarr[] = [
    {
      cardname: 'Employee Details',
    },
    {
      cardname: 'Attendance',
    },
  ];

  constructor(private router: Router) {}

  navigateTO(module: any) {
    const joinName = module.split(' ').join('');
    this.router.navigate([joinName]);
  }
}
