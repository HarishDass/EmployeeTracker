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
  getData(): Observable<DataDetails[]> {
    return this.http.get<DataDetails[]>(this.environment + '/EmpDetails');
  }
  addAttendance(post_data: DataDetails[]): Observable<DataDetails[]> {
    return this.http.post<DataDetails[]>(
      this.environment + '/post_data',
      post_data
    );
  }
}
