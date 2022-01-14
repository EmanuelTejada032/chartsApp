import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styles: [
  ]
})
export class CircularComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Abel Hernandez', 'Emanuel Tejada', 'Xavier Mejia', 'Luis Franco'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 10 ], backgroundColor:['#9259EB', '#EB6E8D','#7434EB', 'red'], hoverBackgroundColor:['#9259EB', '#EB6E8D','#7434EB', 'red']  }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
