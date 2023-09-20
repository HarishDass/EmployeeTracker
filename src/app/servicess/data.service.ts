import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dataa } from 'src/interface/dataa';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getdata(): Observable<Dataa[]> {
    return this.http.get<Dataa[]>('http://localhost:3000/Employeedetails');
  }
}
