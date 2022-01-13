import { Component, OnInit } from '@angular/core';

interface MenuItem{
  path: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
     li{
       cursor: pointer;
     }
    `
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    {
      path:'charts/bars',
      text: 'Bars'
    },
    {
      path:'charts/double-bars',
      text: 'Double bars'
    },
    {
      path:'charts/circular',
      text: 'Circular Chart'
    },
    {
      path:'charts/circular-http',
      text: 'Circular chart http'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
