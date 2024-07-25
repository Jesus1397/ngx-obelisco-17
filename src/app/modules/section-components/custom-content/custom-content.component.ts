import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-content',
  templateUrl: './custom-content.component.html',
  styleUrls: ['./custom-content.component.scss']
})
export class CustomContentComponent {
  public navigation = [
    {
      title: 'Api',
      route: '/components/custom-content/api'
    },
    {
      title: 'Ejemplos',
      route: '/components/custom-content/examples'
    }
  ];
}
