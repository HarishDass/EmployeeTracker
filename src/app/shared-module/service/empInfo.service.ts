import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empDetails } from 'src/interface/empDetails';
import { environment } from 'src/Environment/environment';
@Injectable({
  providedIn: 'root',
})
export class empInfo {
  environment: string = environment.apiUrl;
  departments: string[] = [
    'BACKEND',
    'CYBER',
    'FRONTEND',
    'HR',
    'TESTING',
    'TL',
  ];

  constructor(private http: HttpClient) {}
  getData(): Observable<empDetails[]> {
    return this.http.get<empDetails[]>(this.environment + '/Employeedetails');
  }
  getDepartment(): string[] {
    return this.departments;
  }
}
