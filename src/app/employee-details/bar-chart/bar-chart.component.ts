import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);
import { departmentList, empDetails } from 'src/interface/empDetails';
import { empInfo } from 'src/app/shared-module/service/empInfo.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  constructor(private service: empInfo) {}
  ngOnInit() {
    this.datas();
  }
  datas() {
    this.service.getData().subscribe((resp: empDetails[]) => {
      const departmentList: string[] = this.service.getDepartment();

      const department: departmentList[] = departmentList.map((emp) => {
        let object: departmentList = {
          deptName: emp,
          count: resp.filter((value) => value.deportment === emp).length,
        };
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
              max: 10,
            },
          },
        },
      });
    });
  }
}
