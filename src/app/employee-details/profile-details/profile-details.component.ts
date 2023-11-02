import { Component } from '@angular/core';
import { ProfileDetailServiceService } from '../profile-detail-service.service';
import { ProfileInterface } from '../profile-interface';
import { Router } from '@angular/router';

interface department{
  department: string;
}
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent {
  first: number = 0;
  rows: number = 10;
  profile_details: Array<ProfileInterface> = [];
  global_filter_data: Array<ProfileInterface> = [];
  menu_data: any = [];

  departments: department[] | undefined;

  constructor(
    private main_data: ProfileDetailServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.main_data.getData().subscribe((data: ProfileInterface[]) => {
      this.profile_details = data;
      this.global_filter_data = data;
    });

    this.departments = [
      { department: 'All' },
      { department: 'frontend developer' },
      { department: 'backend developer' },
      { department: 'HR' },
      { department: 'Tester' },
      { department: 'Team Leader' },
      { department: 'Cyper Security' },
    ];

  }
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  
  edit(data:any) {
    this.router.navigate(['EmployeeDetails/AddDetails'], {state:{data:data}})
  }

  depart(departments: any) {
    if (departments.value.department == 'All') {
      this.profile_details = this.global_filter_data;
    } else {
      this.profile_details = this.global_filter_data.filter(
        (get: any) => get.department == departments.value.department
      );
    }
  }
}
