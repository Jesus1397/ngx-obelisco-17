import { DataSource } from '@gcba/ngx-obelisco-17/core/models';

export const NAVBAR_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/navbar/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/navbar/examples',
  },
];

export const NAVBAR_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br /> id: string', customClasses: '' },
    description: {
      data: 'Se utiliza para proporcionar una identificación única al componente de barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> logo: LogoHeader', customClasses: '' },
    description: {
      data: 'Se utiliza para especificar la ruta e imagen del logotipo que se mostrará en la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> isRouteExact: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para indicar si se requiere una coincidencia exacta de ruta al determinar la activación de una ruta en la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> routes: NavbarRoute[]', customClasses: '' },
    description: {
      data: 'Se utiliza para definir las rutas principales que se mostrarán en la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: {
      data: '@Input() <br /> routesExtended: NavbarRoute[]',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para especificar rutas adicionales que se mostrarán en la barra de navegación, posiblemente como extensiones de las rutas principales.',
      customClasses: '',
    },
  },
  {
    name: {
      data: '@Input() <br /> routesAccount: NavbarRouteAccount',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para definir las rutas relacionadas con la cuenta de usuario que se mostrarán en la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: {
      data: '@Input() <br /> routesLogin: NavbarRouteLogin',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para definir las rutas de inicio de sesión o autenticación que se mostrarán en la barra de navegación.',
      customClasses: '',
    },
  },
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
    name: { data: '@Input() <br /> placeholder: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el texto de marcador de posición en el campo de búsqueda de la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: '',
    },
  },
];

export const NAVBAR_ROUTE_BASE_INTERFACE = `
interface NavbarRouteBase {
  iconLeft?: string;
  title?: string;
  iconRight?: string;
  route?: string;
  link?: string;
}
`;
export const LOGO_HEADER_INTERFACE = `
interface Media {
  src: string;
}

interface MediaHeader extends Media {
  alt?: string;
  width?: string;
  height?: string;
  customClasses?: string;
}

interface LogoHeader {
  route?: string;
  img?: MediaHeader[];
}
`;

export const NAVBAR_ROUTE_INTERFACE = `
interface NavbarRoute extends NavbarRouteBase {
  children?: NavbarRouteItem[];
}

interface NavbarRouteItem extends NavbarRouteBase {
  isOverviewItem?: boolean;
}
`;

export const NAVBAR_ROUTE_ACCOUNT_INTERFACE = `
interface NavbarRouteAccount extends NavbarRouteBase {
  children?: NavbarRouteAccountItem[];
}

interface NavbarRouteAccountItem extends NavbarRouteBase {
  isDangerTitle?: boolean;
  isWithNotification?: boolean;
}
`;

export const NAVBAR_ROUTE_LOGIN_INTERFACE = `
  interface NavbarRouteLogin extends NavbarRouteBase {}
`;

export const NAVBAR_SEARCHITEM_INTERFACE = `
interface SearchbarItem {
  title: string;
  route: string;
}
`;

export const LOGO_HEADER_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br /> route: string', customClasses: '' },
    description: {
      data: 'Se utiliza para especificar la ruta de la imagen del logotipo que se mostrará en la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> img: MediaHeader[]', customClasses: '' },
    description: {
      data: 'Se utiliza para especificar la o las imagenes del logotipo que se mostrará en la barra de navegación.',
      customClasses: '',
    },
  },
];
export const MEDIA_HEADER_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br /> src: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir la fuente de la imagen del logotipo que se mostrará en la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> alt: string', customClasses: '' },
    description: {
      data: 'Se utiliza para proporcionar un texto alternativo para la imagen del logotipo, útil para accesibilidad y SEO.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> width: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el ancho de la imagen del logotipo.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> height: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el alto de la imagen del logotipo.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas a la imagen del logotipo.',
      customClasses: '',
    },
  },
];

export const NAVBAR_ROUTE_BASE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br /> iconLeft: string', customClasses: '' },
    description: {
      data: 'Se utiliza para especificar el ícono que se mostrará a la izquierda del enlace en la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> title: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el título o etiqueta del enlace en la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> iconRight: string', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer un ícono que se mostrará a la derecha del enlace en la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> route: string', customClasses: '' },
    description: {
      data: 'Se utiliza para especificar la ruta o URL a la que se redirigirá cuando se haga clic en el enlace en la barra de navegación.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> link: string', customClasses: '' },
    description: {
      data: 'Se utiliza para proporcionar un enlace adicional relacionado con el elemento de la barra de navegación, como un enlace a la documentación o detalles adicionales.',
      customClasses: '',
    },
  },
  {
    name: {
      data: '@Input() <br /> children: NavbarRouteItem[]',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para definir subelementos o enlaces secundarios que estarán anidados bajo este elemento en la barra de navegación.',
      customClasses: '',
    },
  },
];

export const NAVBAR_ROUTE_DATA_SOURCE: DataSource[] = [
  {
    name: {
      data: '@Input() <br /> children: NavbarRouteItem[]',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para especificar los elementos secundarios que estarán anidados bajo este elemento de la barra de navegación. Cada elemento representa un enlace en la barra de navegación.',
      customClasses: '',
    },
  },
];

export const NAVBAR_ROUTE_ITEM_DATA_SOURCE: DataSource[] = [
  {
    name: {
      data: '@Input() <br /> isOverviewItem: boolean',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para indicar si este elemento de la barra de navegación es un elemento de vista general (overview). Cuando es verdadero, puede tener un estilo o comportamiento especial.',
      customClasses: '',
    },
  },
];

export const NAVBAR_ROUTE_ACCOUNT_DATA_SOURCE: DataSource[] = [
  {
    name: {
      data: '@Input() <br /> children: NavbarRouteAccountItem[]',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para especificar los elementos secundarios relacionados con la cuenta del usuario que estarán anidados bajo este elemento en la barra de navegación.',
      customClasses: '',
    },
  },
];

export const NAVBAR_ROUTE_ACCOUNT_ITEM_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br /> isDangerTitle: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para indicar si este elemento de la barra de navegación de la cuenta del usuario tiene un estilo de título de peligro. Puede usarse para resaltar elementos importantes o riesgosos.',
      customClasses: '',
    },
  },
  {
    name: {
      data: '@Input() <br /> isWithNotification: boolean',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para especificar si este elemento de la barra de navegación de la cuenta del usuario debe mostrar una notificación visual para alertar al usuario sobre eventos importantes o mensajes nuevos.',
      customClasses: '',
    },
  },
];

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

export const NAVBAR_SECTIONS_EXAMPLE_HTML = `
<o-navbar
  id="navbarOne"
  [routes]="routes"
  [routesLogin]="routesLogin"
></o-navbar>
`;

export const NAVBAR_SECTIONS_EXTENDED_EXAMPLE_HTML = `
<o-navbar
  id="navbarTwo"
  [routesExtended]="routesExtended"
  [routesLogin]="routesLogin"
></o-navbar>
`;

export const NAVBAR_LOGIN_EXAMPLE_HTML = `
<o-navbar
  id="navbarThree"
  [routes]="routes"
  [routesAccount]="routesAccount"
></o-navbar>
`;

export const NAVBAR_EXTENDED_LOGIN_EXAMPLE_HTML = `
<o-navbar
  id="navbarFour"
  [routesExtended]="routesExtended"
  [routesAccount]="routesAccount"
></o-navbar>
`;

export const NAVBAR_SEARCHBAR_EXAMPLE_HTML = `
<o-navbar
  id="navbarFive"
  [routes]="routes"
  [searchbarItems]="searchbarItems"
></o-navbar>
`;

export const NAVBAR_SECTIONS_EXAMPLE_TS = `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routes: NavbarRoute[] = [
    {
      title: 'Sección 1',
      children: [
        {
          title: 'Navegación',
          link: 'https://music.youtube.com/'
        },
        {
          title: 'Navegación',
          route: '/'
        }
      ]
    },
    {
      title: 'Sección 2',
      route: '/'
    },
    {
      title: 'Sección 3',
      children: [
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/',
          isOverviewItem: true
        }
      ]
    }
  ];

  routesLogin: NavbarRouteLogin = {
    title: 'Ingresar',
    route: '/'
  };
}
`;

export const NAVBAR_SECTIONS_EXTENDED_EXAMPLE_TS = `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routesExtended: NavbarRoute[] = [
    {
      title: 'Sección 1',
      route: '/'
    },
    {
      title: 'Sección 2',
      children: [
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/'
        }
      ]
    },
    {
      title: 'Sección 3',
      route: '/'
    },
    {
      title: 'Sección 4',
      route: '/'
    },
    {
      title: 'Sección 5',
      children: [
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/',
          isOverviewItem: true
        }
      ]
    },
    {
      title: 'Sección 6',
      route: '/'
    }
  ];

  routesLogin: NavbarRouteLogin = {
    title: 'Ingresar',
    route: '/'
  };
}
`;

export const NAVBAR_LOGIN_EXAMPLE_TS = `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routes: NavbarRoute[] = [
    {
      title: 'Sección 1',
      children: [
        {
          title: 'Navegación',
          link: 'https://music.youtube.com/'
        },
        {
          title: 'Navegación',
          route: '/'
        }
      ]
    },
    {
      title: 'Sección 2',
      route: '/'
    },
    {
      title: 'Sección 3',
      children: [
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/',
          isOverviewItem: true
        }
      ]
    }
  ];

  routesAccount: NavbarRouteAccount = {
    title: 'Pefil',
    children: [
      {
        title: 'Navegación',
        route: '/'
      },
      {
        title: 'Navegación',
        route: '/'
      },
      {
        title: 'Navegación',
        route: '/'
      },
      {
        title: 'Notificaciones',
        route: '/',
        isWithNotification: true
      },
      {
        title: 'Cerrar sesión',
        route: '/',
        isDangerTitle: true
      }
    ]
  };
}
`;

export const NAVBAR_EXTENDED_LOGIN_EXAMPLE_TS = `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routesExtended: NavbarRoute[] = [
    {
      title: 'Sección 1',
      route: '/'
    },
    {
      title: 'Sección 2',
      children: [
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/'
        }
      ]
    },
    {
      title: 'Sección 3',
      route: '/'
    },
    {
      title: 'Sección 4',
      route: '/'
    },
    {
      title: 'Sección 5',
      children: [
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/',
          isOverviewItem: true
        }
      ]
    },
    {
      title: 'Sección 6',
      route: '/'
    }
  ];

  routesAccount: NavbarRouteAccount = {
    title: 'Pefil',
    children: [
      {
        title: 'Navegación',
        route: '/'
      },
      {
        title: 'Navegación',
        route: '/'
      },
      {
        title: 'Navegación',
        route: '/'
      },
      {
        title: 'Notificaciones',
        route: '/',
        isWithNotification: true
      },
      {
        title: 'Cerrar sesión',
        route: '/',
        isDangerTitle: true
      }
    ]
  };
}
`;

export const NAVBAR_SEARCHBAR_EXAMPLE_TS = `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routes: NavbarRoute[] = [
    {
      title: 'Sección 1',
      children: [
        {
          title: 'Navegación',
          link: 'https://music.youtube.com/'
        },
        {
          title: 'Navegación',
          route: '/'
        }
      ]
    },
    {
      title: 'Sección 2',
      route: '/'
    },
    {
      title: 'Sección 3',
      children: [
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/',
          isOverviewItem: true
        }
      ]
    }
  ];

  searchbarItems: SearchbarItem[] = [
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
    }
  ];
}
`;
