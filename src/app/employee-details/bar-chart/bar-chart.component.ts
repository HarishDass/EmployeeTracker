import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);
import { DataService } from 'src/app/servicess/data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  chartdata: any = [];
  result: any;
  Name: Array<any> = [];
  Count: any;
  constructor(private service: DataService) {}

  ngOnInit() {
    this.service.getdata().subscribe((res: any) => {
      this.result = res;
      console.log(res);
      this.chartdata = res.map((resp: any) => resp.deportment);
      console.log(this.chartdata);
      const duplicateCounts = this.countDuplicates(this.chartdata);
      console.log(duplicateCounts);

      this.Name = duplicateCounts.map(
        (duplicateCount: any) => duplicateCount.name
      );

      console.log(this.Name);

      this.Count = duplicateCounts.map((duplicateCounts: any) => {
        return duplicateCounts.count;
      });
      console.log(this.Count);
      this.chartdata = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.Name,
          datasets: [
            {
              label: 'Department',
              data: this.Count,
              backgroundColor: [
                'pink',
                'lightblue',
                'grey',
                'yellow',
                'lightgreen',
              ],
              borderColor: ['red', 'blue', 'black', 'orange', 'green'],
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
              beginAtZero: false,
              max: 10,
              min: 1,
            },
          },
        },
      });
    });
  }

  countDuplicates(arr: string[]): { name: string; count: number }[] {
    const nameCounts: { [key: string]: number } = {};

    for (const name of arr) {
      if (nameCounts[name]) {
        nameCounts[name]++;
      } else {
        nameCounts[name] = 1;
      }
      console.log(nameCounts);
    }

    const result: { name: string; count: number }[] = [];

    for (const name in nameCounts) {
      result.push({ name, count: nameCounts[name] });
      console.log(result);
    }

    return result;
  }
}
