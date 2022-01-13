import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { CircularComponent } from './pages/circular/circular.component';
import { CircularHttpComponent } from './pages/circular-http/circular-http.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'bars',
        component: BarsComponent
      },
      {
        path:'double-bars',
        component: DoubleBarsComponent
      },
      {
        path:'circular',
        component: CircularComponent
      },
      {
        path:'circular-http',
        component: CircularHttpComponent
      },
      {
        path:'**',
        redirectTo:'bars'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }



