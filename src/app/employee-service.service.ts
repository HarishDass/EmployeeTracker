import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  url = "http://localhost:3000/details"

  constructor( private http : HttpClient) { }
  // getAllEmployee({
  //   return this.http.get(this.url)
  // })
  saveEmployeeData(data : any){
    // console.log(data);
    return this.http.post(this.url,data) 
  }
}
