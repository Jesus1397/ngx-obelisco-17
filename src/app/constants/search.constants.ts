import { DataSource } from 'ngx-obelisco-17/core/models';

//Routes
export const SEARCH_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/search/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/search/examples',
  },
];

export const SEARCH_DATA_SOURCE: DataSource[] = [
  {
    name: {
      data: '@Input() <br /> searchbarItems: SearchbarItem[]',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para definir los elementos que se mostrarán en la barra de búsqueda, permitiendo a los usuarios realizar búsquedas en el sitio.',
      customClasses: '',
    },
  },
  {
    name: {
      data: '@Input() <br /> maxLengthResults: number',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para establecer el número máximo de resultados que se mostrarán en los resultados de búsqueda.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br />  placeholder: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el texto de marcador de posición en el campo de búsqueda de la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br />  type: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir, en caso de ser necesario, el color de fondo del buscador, como por ejemplo light, white. ',
      customClasses: '',
    },
  },
];

export const SEARCHITEM_INTERFACE = `
interface SearchbarItem {
  title: string;
  route: string;
}`;

export const SEARCHBAR_ITEM_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br /> title: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el título o etiqueta del elemento de búsqueda.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> route: string', customClasses: '' },
    description: {
      data: 'Se utiliza para especificar la ruta o URL a la que se redirigirá cuando se realice una búsqueda en este elemento.',
      customClasses: '',
    },
  },
];

export const SEARCH_SIMPLE_EXAMPLE_HTML = `
  <o-search [searchbarItems]="routes"></o-search>
`;

export const SEARCH_SIMPLE_EXAMPLE_TS = `
import { Component  } from '@angular/core';
import { SearchbarItem } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routes: SearchbarItem[] = [
    {
      title: 'Inicio',
      route: '/'
    },
    {
      title: 'Introducción',
      route: '/get-started'
    },
    {
      title: 'Componentes',
      route: '/components'
    },
    {
      title: 'Buscador',
      route: '/components/search'
    }
  ];
}
`;

export const SEARCH_EXAMPLE_HTML = `
<o-search 
  [searchbarItems]="routes" 
  [onSelectItem]="handleSelectItem"
></o-search>`;

export const SEARCH_EXAMPLE_TS = `
import { Component  } from '@angular/core';
import { SearchbarItem } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routes: SearchbarItem[] = [
    {
      title: 'Inicio',
      route: '/'
    },
    {
      title: 'Introducción',
      route: '/get-started'
    },
    {
      title: 'Componentes',
      route: '/components'
    },
    {
      title: 'Buscador',
      route: '/components/search'
    }
  ];

  handleSelectItem(item: SearchbarItem) {
    console.log('Item seleccionado:', item.title);
  }
}
`;
