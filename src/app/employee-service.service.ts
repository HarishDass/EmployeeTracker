import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  url = 'http://localhost:3000/details';

  constructor(private http: HttpClient) {}

  departments = [
    { department: 'Select Department' },
    { department: 'HR' },
    { department: 'Frontend Developer' },
    { department: 'Backend Developer' },
    { department: 'Tester' },
    { department: 'Team Leader' },
    { department: 'Cypersecurity' },
  ];

  saveEmployeeData(data1: any) {
    return this.http.post(this.url, data1);
  }
}
