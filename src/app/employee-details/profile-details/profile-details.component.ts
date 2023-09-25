import { Component } from '@angular/core';
import { ProfileDetailServiceService } from '../profile-detail-service.service';
import { ProfileInterface } from '../profile-interface';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent {
  first: number = 0;
  rows: number = 10;
  array: Array<ProfileInterface> = [];
  Inactive: any = {};

  constructor(private datum: ProfileDetailServiceService) {}
  ngOnInit(): void {
    this.datum.getData().subscribe((data: ProfileInterface[]) => {
      this.array = data;
      console.log(this.array);
    });
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  showDialog(array: any) {
    this.Inactive = array;
    console.log(this.Inactive);
  }
}
