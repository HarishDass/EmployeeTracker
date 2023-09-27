import { Component } from '@angular/core';
import { ProfileDetailServiceService } from '../profile-detail-service.service';
import { ProfileInterface } from '../profile-interface';
import { Router } from '@angular/router';

interface department {
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
  array: Array<ProfileInterface> = [];
  new_data: Array<ProfileInterface> = [];

  departments: department[] | undefined;

  constructor(
    private datum: ProfileDetailServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.datum.getData().subscribe((data: ProfileInterface[]) => {
      this.array = data;
      this.new_data = data;
    });

    this.departments = [
      { department: 'All' },
      { department: 'frontend developer' },
      { department: 'backend developer' },
      { department: 'HR' },
      { department: 'Tester' },
      { department: 'Team Leader' },
      { department: 'Cypersecurity' },
    ];
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  showDialog(array: any) {
    this.router.navigate([array]);
  }

  depart(departments: any) {
    if (departments.value.department == 'All') {
      this.array = this.new_data;
      console.log(this.array);
    } else {
      this.array = this.new_data.filter(
        (get: any) => get.department === departments.value.department
      );
    }
  }
}
