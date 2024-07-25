import { AlertList, DataSource } from 'ngx-obelisco-17/core/models';

export const ALERT_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/alert/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/alert/examples',
  },
];
export const ALERT_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> type: AlertTypes', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el tipo de la alerta. Por defecto es info.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isDismissible: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para definir si se mostrará el componente con cierre. Por defecto es false.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> listContent: AlertList', customClasses: '' },
    description: {
      data: 'Se utiliza para definir una lista en la alerta. ',
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

export const ALERT_TYPES = `
  type AlertTypes = 'primary' | 'success' | 'danger' | 'info';
`;

export const ALERT_LIST_INTERFACE = `
export interface AlertList {
  isUnorderedList?: boolean;
  listItems: AlertListItems[];
}

export interface AlertListItems {
  text?: string;
  url?: string;
}
`;
export const ALERT_LIST_INTERFACE_DATA_SOURCE: DataSource[] = [
  {
    name: {
      data: '@Input() <br/> isUnorderedList: boolean',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para establecer si la lista dentro de la alerta debe ser una lista desordenada (con viñetas) o una lista ordenada (numerada). Por defecto es false (lista ordenada).',
      customClasses: '',
    },
  },
  {
    name: {
      data: '@Input() <br/> listItems: AlertListItems[]',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para establecer los elementos de la lista, cada uno de los cuales puede tener un texto y una URL asociada. ',
      customClasses: '',
    },
  },
];

export const ALERT_EXAMPLE_COLORS = `
<o-alert>
  Esta es la descripción de una alerta de información.
</o-alert>
<o-alert type="primary">
  Esta es la descripción de una alerta de información.
</o-alert>
<o-alert type="success">
  Esta es la descripción de una alerta de información.
</o-alert>
<o-alert type="danger">
  Esta es la descripción de una alerta de información.
</o-alert>
`;

export const ALERT_EXAMPLE_DISMISSIBLE = `
<o-alert [isDismissible]="true">
  Esta es la descripción de una alerta de información.
</o-alert>
`;

export const ALERT_EXAMPLE_HIGHLIGHT = `
<o-alert>
  <strong>Este es un destacado de una alerta de información.</strong>
  Esta es la descripción de una alerta de información que continua al texto destacado.
</o-alert>
`;

export const ALERT_EXAMPLE_HIGHLIGHT_LINK = `
<o-alert>
  <strong>Este es un destacado de una alerta de información.</strong>
  Esta es la descripción de una alerta de información que continua al texto destacado, incluso con
  <a [routerLink]="['/']">con enlace</a>.
</o-alert>
`;

export const ALERT_EXAMPLE_LIST_LINK_ITEMS: AlertList = {
  listItems: [
    { text: 'Ancla al error 1', url: '#' },
    { text: 'Ancla al error 2', url: '#' },
    { text: 'Ancla al error 3', url: '#' },
    { text: 'Ancla al error 4', url: '#' },
    { text: 'Ancla al error 5', url: '#' },
  ],
};
export const ALERT_EXAMPLE_LIST_ITEMS: AlertList = {
  listItems: [
    { text: 'Texto descriptivo 1' },
    { text: 'Texto descriptivo 2' },
    { text: 'Texto descriptivo 3' },
    { text: 'Texto descriptivo 4' },
    { text: 'Texto descriptivo 5' },
  ],
};
export const ALERT_EXAMPLE_LISTS_HTML = `
<o-alert type="danger" [listContent]="listLinkItems">
  <strong>Este es un destacado de una alerta de error.</strong>
  Esta es la descripción de una alerta de error que continua al texto destacado.
</o-alert>

<o-alert [listContent]="listItems">
  <strong>Este es un destacado de una alerta de información.</strong>
  Esta es la descripción de una alerta de información que continua al texto destacado.
</o-alert>
`;
export const ALERT_EXAMPLE_LISTS_TS = `
import { Component } from '@angular/core';
import { AlertList } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public listLinkItems: AlertList = {
    listItems: [
      { text: 'Ancla al error 1', url: '#' },
      { text: 'Ancla al error 2', url: '#' },
      { text: 'Ancla al error 3', url: '#' },
      { text: 'Ancla al error 4', url: '#' },
      { text: 'Ancla al error 5', url: '#' }
    ]
  };
  public listItems: AlertList = {
    listItems: [
      { text: 'Texto descriptivo 1' },
      { text: 'Texto descriptivo 2' },
      { text: 'Texto descriptivo 3' },
      { text: 'Texto descriptivo 4' },
      { text: 'Texto descriptivo 5' }
    ]
  };
}
`;
