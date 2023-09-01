import { Component } from '@angular/core';
import { EmployeData } from '../interface/employe-data';
import { LeftoverTableService } from './Services/leftover-table.service';
@Component({
  selector: 'app-inactive-employee',
  templateUrl: './inactive-employee.component.html',
  styleUrls: ['./inactive-employee.component.css']
})
export class InactiveEmployeeComponent {
  leftoverdatas:EmployeData[]=[]

  constructor(private LinkData:LeftoverTableService){}
  ngOnInit()
  {this.LinkData.getDataFn().subscribe((res:EmployeData[])=>{
      this.leftoverdatas=res
      // console.log(this.getData)
     })
}
}