import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css'],
})
export class SideNavBarComponent implements OnInit {
  @Input() page: any;
  isSidebarActive = false;

  ngOnInit(): void {}

  constructor(private router: Router) {}

  goTO(module: any) {
    this.router.navigate([module]);
  }
}
