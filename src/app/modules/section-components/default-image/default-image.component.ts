import { Component } from '@angular/core';

@Component({
  selector: 'app-default-image',
  templateUrl: './default-image.component.html',
  styleUrls: ['./default-image.component.scss']
})
export class DefaultImageComponent {
  public navigation = [
    {
      title: 'Api',
      route: '/components/default-image/api'
    },
    {
      title: 'Ejemplos',
      route: '/components/default-image/examples'
    }
  ];
}
