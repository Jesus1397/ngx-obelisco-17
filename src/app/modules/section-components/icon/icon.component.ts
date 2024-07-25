import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  constructor() {}

  public navigationIcon = [
    {
      title: 'Api',
      route: '/components/icon/api'
    },
    {
      title: 'Ejemplos',
      route: '/components/icon/examples'
    }
  ];
}
