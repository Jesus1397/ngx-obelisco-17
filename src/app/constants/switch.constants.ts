import { DataSource } from '@gcba/ngx-obelisco-17/core/models';

export const SWITCH_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/switch/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/switch/examples',
  },
];

export const SWITCH_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> id: string', customClasses: '' },
    description: {
      data: 'Se utiliza para identificar de manera única el elemento en el código.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> labelOn: string', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el texto cuando el switch está en posición de encendido.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> labelOff: string', customClasses: '' },
    description: {
      data: 'Se utiliza para determinar si se aplica un estilo oscuro al switch.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isDark: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para controlar si el switch se muestra en un tamaño pequeño.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isSmall: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para controlar si el switch se muestra en un tamaño pequeño.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isDisabled: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para desactivar la capacidad de interactuar con el switch.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isFixed: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para mantener el switch en una posición fija y evitar cambios.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> switchValue: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el estado inicial (encendido o apagado) del switch.',
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
  {
    name: {
      data: '@Input() <br /> customClassesLabel: string',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al label del componente para personalizar su apariencia.',
      customClasses: '',
    },
  },
];

export const SWITCH_DATA_SOURCE_OUTPUT: DataSource[] = [
  {
    name: {
      data: '@Output() <br /> switchValueChange: EventEmitter<boolean>',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para notificar cuando se produce un cambio en el estado del switch.',
      customClasses: '',
    },
  },
];

export const SWITCH_DEFAULT = `
<o-switch></o-switch>
<o-switch [switchValue]="true"></o-switch>
`;

export const SWITCH_WITH_LABEL = `
<o-switch [id]="'example'" [labelOff]="'Apagado'" [labelOn]="'Prendido'"></o-switch>
`;

export const SWITCH_DARK = `
<o-switch [isDark]="true"></o-switch>
<o-switch [isDark]="true" [switchValue]="true"></o-switch>
`;

export const SWITCH_SMALL = `
<o-switch [isSmall]="true"></o-switch>
<o-switch [isSmall]="true" [switchValue]="true"></o-switch>
`;

export const SWITCH_CHECKED = `
<o-switch [isFixed]="true"></o-switch>
<o-switch [isFixed]="true" [switchValue]="true"></o-switch>
`;

export const SWITCH_DISABLED = `
<o-switch [isDisabled]="true" [labelOff]="'Apagado'"></o-switch>
<o-switch [isDisabled]="true" [labelOn]="'Prendido'" [switchValue]="true"></o-switch>
`;
