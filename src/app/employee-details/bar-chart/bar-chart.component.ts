import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);
import { DataService } from '../servicess/data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  chartdata: string[] = [];
  constructor(private service: DataService) {}
  ngOnInit() {
    this.datas();
  }
  datas() {
    this.service.getdata().subscribe((data: Data) => {
      this.chartdata = data['map']((data1: Data) => data1['deportment']);
      const duplicateCounts = this.countDuplicates(this.chartdata);
      duplicateCounts.sort((dept1: any, dept2: any) => {
        if (dept1.name > dept2.name) {
          return 1;
        }
        if (dept1.name < dept2.name) {
          return -1;
        }
        return 0;
      });
      new Chart('canvas', {
        type: 'bar',
        data: {
          labels: ['BACKEND', 'CYBER', 'FRONTEND', 'HR', 'TESTING', 'TL'],
          datasets: [
            {
              label: 'Department',
              data: duplicateCounts.map(
                (duplicateCounts: any) => duplicateCounts.count
              ),
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

  countDuplicates(arr: string[]) {
    const nameCounts: { [key: string]: number } = {};
    for (const name of arr) {
      nameCounts[name] = (nameCounts[name] || 0) + 1;
    }
    return Object.keys(nameCounts).map((name) => ({
      name,
      count: nameCounts[name],
    }));
  }
}
