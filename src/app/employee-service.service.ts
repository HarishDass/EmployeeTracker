import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  url = 'http://localhost:3000/details';

  constructor(private http: HttpClient) {}

  saveEmployeeData(data1: any) {
    return this.http.post(this.url, data1);
  }
}
