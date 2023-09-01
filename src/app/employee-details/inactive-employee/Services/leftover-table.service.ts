import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { EmployeData } from '../../interface/employe-data';


@Injectable({
  providedIn: 'root'
})
export class LeftoverTableService {

  constructor(private link:HttpClient) { }

  getDataFn():Observable<EmployeData[]>{
    return this.link.get<EmployeData[]>('https://jsonplaceholder.typicode.com/users')
    
  }
}
