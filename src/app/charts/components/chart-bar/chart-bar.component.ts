import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styles: [
  ]
})
export class ChartBarComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() line: boolean = false;
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    
  };

  public barChartType: ChartType = 'bar';

  @Input() public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [ 100 ], label: ''}
    ]
  };

  constructor() { }

  ngOnInit(): void {
    if(this.line){
      this.barChartType = 'line';
    }
  }



  randomize () { 
    
    this.barChartData.datasets.forEach(element => {
      element.data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
    }) 

    this.chart?.update();
  }


}
