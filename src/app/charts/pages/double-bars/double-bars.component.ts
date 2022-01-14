import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styles: [
  ]
})
export class DoubleBarsComponent implements OnInit {

  providerLabels: string[] = ['2021', '2022','2023','2024','2025'];

  public providerData: ChartData<'bar'> = {
    labels: this.providerLabels,
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Seller A' },
      { data: [ 50,250,30, 450,200 ], label: 'Seller B' },
    ]
  };

  productData: ChartData<'bar'> = {
    labels: this.providerLabels,
    datasets:[
      { data: [ 200, 300,400,300, 100 ], label:'cars',backgroundColor: 'blue' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }



}
