import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeData } from '../interface/employe-data';
import { environment } from 'src/Environment/environment';

@Injectable({
  providedIn: 'root',
})
export class LeftoverTableService {
  environment: string = environment.apiUrl;
  constructor(private link: HttpClient) {}

  employeeDataFn(): Observable<EmployeData[]> {
    return this.link.get<EmployeData[]>(this.environment + '/EmpDetails');
  }

  updateDataFn(individualData: EmployeData) {
    return this.link.put<EmployeData>(
      `${this.environment + '/EmpDetails'}/${individualData.id}`,
      individualData
    );
  }
}
