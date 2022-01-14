import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-circular-http',
  templateUrl: './circular-http.component.html',
  styles: [
  ]
})
export class CircularHttpComponent implements OnInit {


  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [], backgroundColor:['#9259EB', '#EB6E8D','#7434EB', 'red'], hoverBackgroundColor:['#9259EB', '#EB6E8D','#7434EB', 'red']  }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';
  constructor(private chartsServices: ChartsService) { }

  ngOnInit(): void {
    this.getChartData();
  }

  getChartData(){
    this.chartsServices.getChartsData()
    .subscribe(res => {
      for(const key in res){
        this.doughnutChartLabels.push(key);
        this.doughnutChartData.datasets[0].data.push(Number(res[key]));
      }
    })
  }

//  getChartData(){
//     this.chartsServices.getChartDataDona()
//     .subscribe(({labels, values}) => {
//        this.doughnutChartLabels = labels;
//        this.doughnutChartData.datasets[0].data = values;
//     })
//   }
 

}
