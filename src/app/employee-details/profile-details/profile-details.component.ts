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
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  array: Array<ProfileInterface> = [];
  Inactive: any = {};
  newdata: Array<ProfileInterface> = [];
  visible: boolean = false;
  ingredient!: boolean;
  obj: any = {};
  constructor(private datum: ProfileDetailServiceService) {}

  ngOnInit(): void {
    this.datum.getData().subscribe((data: ProfileInterface[]) => {
      console.log(data);
      this.array = data;
      console.log(this.array);
    });
  }

  showDialog(array: any) {
    this.visible = true;
    this.Inactive = array;
    console.log(this.Inactive);
  }
}
