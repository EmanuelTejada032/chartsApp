import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { delay, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  getChartsData(){
    return this.http.get<any>("http://localhost:3000/grafica");
  }

  // getChartDataDona(){
  //   return this.getChartsData().pipe(
  //     map( data => {
  //       const labels = Object.keys(data);
  //       const values = Object.values(data);
        
  //       return {labels, values};
  //     })
  //   )

  // }

}
