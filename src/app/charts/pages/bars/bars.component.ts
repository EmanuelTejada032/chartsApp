import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styles: [
  ]
})
export class BarsComponent implements OnInit {
  


  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 100, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: "#687CE8", hoverBackgroundColor:"#687CE8" },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' , backgroundColor: "#6DA5F2", hoverBackgroundColor:"#6DA5F2"},
      { data: [ 18, 32, 25, 90, 44, 55, 11 ], label: 'Series C' , backgroundColor: "#6EB9DB", hoverBackgroundColor:"#6EB9DB"}
    ]
  };
  ngOnInit(): void {
      
  }


  
 
}
