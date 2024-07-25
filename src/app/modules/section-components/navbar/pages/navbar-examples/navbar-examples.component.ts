import { Component } from '@angular/core';
import {
  NavbarRoute,
  NavbarRouteAccount,
  NavbarRouteLogin,
  SearchbarItem,
} from 'ngx-obelisco-17/core/models';
import {
  NAVBAR_EXTENDED_LOGIN_EXAMPLE_HTML,
  NAVBAR_EXTENDED_LOGIN_EXAMPLE_TS,
  NAVBAR_LOGIN_EXAMPLE_HTML,
  NAVBAR_LOGIN_EXAMPLE_TS,
  NAVBAR_SEARCHBAR_EXAMPLE_HTML,
  NAVBAR_SEARCHBAR_EXAMPLE_TS,
  NAVBAR_SECTIONS_EXAMPLE_HTML,
  NAVBAR_SECTIONS_EXAMPLE_TS,
  NAVBAR_SECTIONS_EXTENDED_EXAMPLE_HTML,
  NAVBAR_SECTIONS_EXTENDED_EXAMPLE_TS,
} from 'src/app/constants/navbar.constants';

@Component({
  selector: 'app-navbar-examples',
  templateUrl: './navbar-examples.component.html',
  styleUrls: ['./navbar-examples.component.scss'],
})
export class NavbarExamplesComponent {
  public navbarSectionsExampleHtml = NAVBAR_SECTIONS_EXAMPLE_HTML;
  public navbarSectionsExtendedExampleHtml =
    NAVBAR_SECTIONS_EXTENDED_EXAMPLE_HTML;
  public navbarLoginExampleHtml = NAVBAR_LOGIN_EXAMPLE_HTML;
  public navbarExtendedLoginExampleHtml = NAVBAR_EXTENDED_LOGIN_EXAMPLE_HTML;
  public navbarSearchbarExampleHtml = NAVBAR_SEARCHBAR_EXAMPLE_HTML;

  public navbarSectionsExampleTs = NAVBAR_SECTIONS_EXAMPLE_TS;
  public navbarSectionsExtendedExampleTs = NAVBAR_SECTIONS_EXTENDED_EXAMPLE_TS;
  public navbarLoginExampleTs = NAVBAR_LOGIN_EXAMPLE_TS;
  public navbarExtendedLoginExampleTs = NAVBAR_EXTENDED_LOGIN_EXAMPLE_TS;
  public navbarSearchbarExampleTs = NAVBAR_SEARCHBAR_EXAMPLE_TS;

  routes: NavbarRoute[] = [
    {
      title: 'Sección 1',
      children: [
        {
          title: 'Navegación',
          link: 'https://music.youtube.com/',
        },
        {
          title: 'Navegación',
          route: '/',
        },
      ],
    },
    {
      title: 'Sección 2',
      route: '/',
    },
    {
      title: 'Sección 3',
      children: [
        {
          title: 'Navegación',
          route: '/',
        },
        {
          title: 'Navegación',
          route: '/',
          isOverviewItem: true,
        },
      ],
    },
  ];

  routesExtended: NavbarRoute[] = [
    {
      title: 'Sección 1',
      route: '/',
    },
    {
      title: 'Sección 2',
      children: [
        {
          title: 'Navegación',
          route: '/',
        },
        {
          title: 'Navegación',
          route: '/',
        },
      ],
    },
    {
      title: 'Sección 3',
      route: '/',
    },
    {
      title: 'Sección 4',
      route: '/',
    },
    {
      title: 'Sección 5',
      children: [
        {
          title: 'Navegación',
          route: '/',
        },
        {
          title: 'Navegación',
          route: '/',
          isOverviewItem: true,
        },
      ],
    },
    {
      title: 'Sección 6',
      route: '/',
    },
  ];

  routesAccount: NavbarRouteAccount = {
    title: 'Pefil',
    children: [
      {
        title: 'Navegación',
        route: '/',
      },
      {
        title: 'Navegación',
        route: '/',
      },
      {
        title: 'Navegación',
        route: '/',
      },
      {
        title: 'Notificaciones',
        route: '/',
        isWithNotification: true,
      },
      {
        title: 'Cerrar sesión',
        route: '/',
        isDangerTitle: true,
      },
    ],
  };

  routesLogin: NavbarRouteLogin = {
    title: 'Ingresar',
    route: '/',
  };

  searchbarItems: SearchbarItem[] = [
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
  ];
}
