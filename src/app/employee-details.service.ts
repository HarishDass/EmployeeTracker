import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  getData() {
    this.http.get('http://localhost:3000/data');
  }
}
