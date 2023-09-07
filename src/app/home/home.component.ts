import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carddetailsinarr } from '../shared-module/carddetailsinarr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  value: any;
  cardData: Carddetailsinarr[] = [
    {
      imagesforcard: '../../assets/home_page_images/emp_details_card_img.png',
      cardname: 'Employee Details',
      routing: 'EmployeeDetails',
    },
    {
      imagesforcard:
        '../../assets/home_page_images/emp_attendence_card_img.jpg',
      cardname: 'Attendance',
      routing: 'Attendance',
    },
  ];

  constructor(private router: Router) {}

  navigateTO(module: any) {
    this.router.navigate([module]);
  }
}
