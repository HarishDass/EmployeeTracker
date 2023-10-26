import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataDetails } from 'src/app/shared-module/interface/data-details';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchService {
  environment: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  departments = [
    { name: 'All' },
    { name: 'Frontend Developer' },
    { name: 'Backend Developer' },
    { name: 'Tester' },
    { name: 'HR' },
    { name: 'CyberSecurity' },
  ];

  getData(): Observable<DataDetails[]> {
    return this.http.get<DataDetails[]>(this.environment + '/EmpDetails');
  }
  addAttendance(
    post_attendance_data: DataDetails[]
  ): Observable<DataDetails[]> {
    return this.http.post<DataDetails[]>(
      this.environment + '/post_attendance_data',
      post_attendance_data
    );
  }
}
