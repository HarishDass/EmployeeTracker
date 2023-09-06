import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css'],
})
export class SideNavBarComponent {
  isMenuActive = false;
  isSidebarActive = false;
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    this.isSidebarActive = !this.isSidebarActive;
  }
}
