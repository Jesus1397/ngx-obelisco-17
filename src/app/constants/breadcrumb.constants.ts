import { DataSource } from '@gcba/ngx-obelisco/core/models';

export const BREADCRUMB_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/breadcrumb/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/breadcrumb/examples'
  }
];

export const DATA_SOURCE_BREADCRUMB_INTERFACE: DataSource[] = [
  {
    name: { data: 'routes', customClasses: '' },
    description: {
      data: 'Se utiliza para agregar las rutas que se quieren agregar al breadcrumb. Cada ruta puede tener un nombre o un id, también se puede agregar una ruta específica',
      customClasses: ''
    }
  },
  {
    name: { data: 'defaultRoute', customClasses: '' },
    description: {
      data: 'Se utiliza para agregar una route generica al breadcrumb. Para que lo puedan utilizar las <strong>routes</strong>',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: ''
    }
  }
];

export const DATA_SOURCE_BREADCRUMB_ROUTE_INTERFACE: DataSource[] = [
  {
    name: { data: 'name', customClasses: '' },
    description: { data: 'Se utiliza para agregar el nombre de la ruta.', customClasses: '' }
  },
  {
    name: { data: 'id', customClasses: '' },
    description: {
      data: 'Se utiliza para agregar el id de la ruta. Si se agrega un id, se va a agregar al final de la ruta.',
      customClasses: ''
    }
  },
  {
    name: { data: 'route', customClasses: '' },
    description: {
      data: 'Se utiliza para agregar una ruta específica. Si no se agrega una ruta, toma por defecto la ruta del breadcrumb.',
      customClasses: ''
    }
  }
];

export const BREADCRUMB_INTERFACE1 = `
interface Breadcrumb {
  routes: BreadcrumbRoute[];
  defaultRoute: string;
}
`;

export const BREADCRUMB_INTERFACE2 = `
interface BreadcrumbRoute {
  name: string;
  id?: string;
  route?: string;
}
`;

export const BREADCRUMB_EXAMPLE_HTML = `
<o-breadcrumb></o-breadcrumb>
`;

export const BREADCRUMB_EXAMPLE_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.breadcrumb$.next({
      routes: [
        { name: 'Inicio', route: '/custom' },
        { name: 'nivel 2', id: '15151' },
        { name: 'nivel 3', route: '/custom-routes' },
        { name: 'Página anterior', id: '525252525', route: '/custom' }
      ],
      defaultRoute: '/route-default'
    });
  }
}
`;
