import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { CircularComponent } from './pages/circular/circular.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    CircularComponent,
    ChartBarComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
