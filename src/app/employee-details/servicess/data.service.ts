import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/interface/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getdata(): Observable<Data[]> {
    return this.http.get<Data[]>('http://localhost:3000/Employeedetails');
  }
}
