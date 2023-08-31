import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  value: any;
  constructor(private router: Router) {}
  navigateTO(module: any) {
    this.router.navigate([module]);
  }
}
