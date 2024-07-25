import { Component } from '@angular/core';
import { SearchbarItem } from 'ngx-obelisco-17/core/models';
import {
  SEARCH_EXAMPLE_HTML,
  SEARCH_EXAMPLE_TS,
  SEARCH_SIMPLE_EXAMPLE_HTML,
  SEARCH_SIMPLE_EXAMPLE_TS,
} from 'src/app/constants/search.constants';

@Component({
  selector: 'app-search-examples',
  templateUrl: './search-examples.component.html',
  styleUrls: ['./search-examples.component.scss'],
})
export class SearchExamplesComponent {
  public searchExampleHtml = SEARCH_EXAMPLE_HTML;
  public searchExampleTs = SEARCH_EXAMPLE_TS;

  public searchSimpleExampleHtml = SEARCH_SIMPLE_EXAMPLE_HTML;
  public searchSimpleExampleTs = SEARCH_SIMPLE_EXAMPLE_TS;

  routes: SearchbarItem[] = [
    {
      title: 'Inicio',
      route: '/',
    },
    {
      title: 'Introducción',
      route: '/get-started',
    },
    {
      title: 'Componentes',
      route: '/components',
    },
    {
      title: 'Buscador',
      route: '/components/search',
    },
  ];

  handleSelectItem(item: SearchbarItem) {
    console.log('Item seleccionado:', item.title);
  }
}
