import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeData } from '../../interface/employe-data';

@Injectable({
  providedIn: 'root',
})
export class LeftoverTableService {
  constructor(private link: HttpClient) {}
  server: string = 'http://localhost:3000/EmpDetails';

  employeeDataFn(): Observable<EmployeData[]> {
    return this.link.get<EmployeData[]>(this.server);
  }

  updateDataFn() {
    return this.link.put;
  }
}
