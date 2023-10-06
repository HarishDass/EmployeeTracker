import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataDetails } from '../interfaces/data-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchService {
  url = 'http://localhost:3000/details';
  url2 = 'http://localhost:3000/post_data';

  constructor(private http: HttpClient) {}
  getData(): Observable<DataDetails[]> {
    return this.http.get<DataDetails[]>(this.url);
  }

  addAttendance(post_data: DataDetails[]): Observable<DataDetails[]> {
    return this.http.post<DataDetails[]>(this.url2, post_data);
  }
}
