import { DataSource } from '@gcba/ngx-obelisco-17/core/models';

export const BADGE_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/badge/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/badge/examples',
  },
];
/* BADGE-API */
export const BADGE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> type: BadgeTypes', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el color de la etiqueta. Por defecto es secondary.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> link: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir la URL a la que se debe redirigir el componente.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> route: string', customClasses: '' },
    description: {
      data: 'Se utiliza para especificar la ruta de navegación que debe seguir el componente.',
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
    name: { data: '@Input() <br/> text: string', customClasses: '' },
    description: {
      data: 'Puede ser utilizado para establecer el texto de la etiqueta.',
      customClasses: '',
    },
  },
];

export const BADGE_TYPES = `
  type BadgeTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'info';
`;
/* BADGE-EXMPLES */
export const BADGE_TYPES_EXAMPLES = `
<o-badge>Etiqueta</o-badge>
<o-badge type="info">Etiqueta</o-badge>
<o-badge type="primary">Etiqueta</o-badge>
<o-badge type="success">Etiqueta</o-badge>
<o-badge type="danger">Etiqueta</o-badge>
`;
export const BADGE_TYPES_LINKS = `
<o-badge link="https://gcba.github.io/Obelisco">Etiqueta con link</o-badge>
<o-badge route="#">Etiqueta con route</o-badge>
`;
