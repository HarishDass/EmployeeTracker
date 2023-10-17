import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeData } from '../interface/employe-data';
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
  getData(): Observable<EmployeData[]> {
    return this.http.get<EmployeData[]>(this.environment + '/EmpDetails');
  }
  getDepartment(): string[] {
    return this.departments;
  }
}
