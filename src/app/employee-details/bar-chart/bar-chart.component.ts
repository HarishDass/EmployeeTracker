import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  title = 'EmployeeTrackingDetails';

  basicData: any;
  basicOptions: any;

  constructor() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['HR', 'FROND-END', 'BACK-END', 'TESTER', 'TL', 'CYBER-SECURITY'],
      datasets: [
        {
          label: 'DEPARTMENTS',
          data: [10, 15, 12, 80, 20, 30],
          backgroundColor: [
            '#F08080 ',
            '#20B2AA',
            '#4169E1',
            '#FFB6C1',
            '#8B008B',
            '#808080',
          ],
          borderColor: [
            'rgb(255, 160, 64)',
            'rgb(64, 255, 179)',
            'rgb(64, 134, 255)',
            'rgb(255, 64, 204)',
            'rgb(220, 64, 255)',
            'rgb(87, 86, 83)',
          ],
          borderWidth: 0.5,
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
