import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataDetails } from '../interfaces/data-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchService {
  url = 'http://localhost:3000/details';

  constructor(private http: HttpClient) {}
  getData(): Observable<DataDetails[]> {
    return this.http.get<DataDetails[]>(this.url);
  }

  saveUser(data: DataDetails[]): Observable<DataDetails[]> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post<DataDetails[]>(this.url + 'data', body, {
      headers: headers,
    });
  }
}
