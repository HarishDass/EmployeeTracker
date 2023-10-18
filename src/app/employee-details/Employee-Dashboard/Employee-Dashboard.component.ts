import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);
import {
  departmentList,
  EmployeData,
} from 'src/app/shared-module/interface/employe-data';
import { empInfo } from '../../shared-module/services/empInfo.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent {
  constructor(private service: empInfo) {}
  ngOnInit() {
    this.datas();
  }
  datas() {
    this.service.getData().subscribe((resp: EmployeData[]) => {
      const departmentList: string[] = this.service.getDepartment();

      const department: departmentList[] = departmentList.map((emp) => {
        let object: departmentList = {
          deptName: emp,
          count: resp.filter((value) => value.department === emp).length,
        };
        console.log(object);
        return object;
      });

      new Chart('canvas', {
        type: 'bar',
        data: {
          labels: department.map((dept) => {
            return dept.deptName;
          }),
          datasets: [
            {
              label: 'Department',
              data: department.map((dept) => {
                return dept.count;
              }),
              backgroundColor: [
                '#fc9baf',
                '#91E0FF',
                '#808080',
                '#FFFF00',
                '#83F28F',
                '#CA86EC',
              ],
              borderColor: [
                '#d90166',
                '#0000FF',
                '#000000',
                '#e47200',
                '#008631',
                '#400040',
              ],
              borderWidth: 1.5,
            },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                offset: true,
              },
            },
            y: {
              beginAtZero: true,
              min: 0,
              max: 20,
            },
          },
        },
      });
    });
  }
}
