import { DataSource } from '@gcba/ngx-obelisco-17/core/models';

export const COLLAPSE_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/collapse/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/collapse/examples',
  },
];

/* COLLAPSE API */
export const COLLAPSE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> identifier: string' },
    description: {
      data: 'Se utiliza para asignar el ID del colapsable.',
    },
  },
  {
    name: { data: '@Input() <br/> dataParent: string' },
    description: {
      data: 'Se utiliza para agregar un identificador para el comportamiento de los colapsables sean de selección unica.',
    },
  },
  {
    name: { data: '@Input() <br/> icon?: string' },
    description: { data: 'Se utiliza para definir el icono del colapsable.' },
  },
  {
    name: { data: '@Input() <br/> label?: string' },
    description: {
      data: 'Se utiliza para definir la etiqueta del colapsable.',
    },
  },
  {
    name: { data: '@Input() <br/> title?: string' },
    description: { data: 'Se utiliza para definir el título del colapsable.' },
  },
  {
    name: { data: '@Input() <br/> isTitleAlone?: boolean' },
    description: {
      data: 'Se utiliza para definir si el título del colapsable está solo.',
    },
  },
  {
    name: { data: '@Input() <br/> subtitle?: string' },
    description: {
      data: 'Se utiliza para definir el subtítulo del colapsable.',
    },
  },
  {
    name: { data: '@Input() <br/> content?: string | string[]' },
    description: {
      data: 'Se utiliza para definir el contenido del colapsable.',
    },
  },
  {
    name: {
      data: '@Input() <br/> children?: CollapseItems[] | CollapseInputs[]',
    },
    description: {
      data: 'Se utiliza para definir la lista colapsables del componente.',
    },
  },
  {
    name: { data: '@Input() <br/> customClassesHeader?: string' },
    description: {
      data: 'Se utiliza para definir clases personalizadas para el encabezado del colapsable.',
    },
  },
  {
    name: { data: '@Input() <br/> customClassesContent?: string' },
    description: {
      data: 'Se utiliza para definir clases personalizadas para el contenido del colapsable.',
    },
  },
  {
    name: { data: '@Input() <br/> isWhite?: boolean = false' },
    description: {
      data: 'Se utiliza para definir si el colapsable es de color blanco.',
    },
  },
];

export const COLLAPSE_DATA_SOURCE_OUTPUT: DataSource[] = [
  {
    name: {
      data: '@Output() <br/> selectedItemChange: EventEmitter&lt;CollapseInputs&gt;',
    },
    description: {
      data: 'Esto define un evento de salida (@Output) llamado selectedItemChange que emite instancias de CollapseInputs cuando cambia, lo que permite a otros componentes reaccionar a cambios en la selección del elemento.',
    },
  },
];

export const COLLAPSE_ITEMS_INTERFACE = `
interface CollapseItems {
  label: string;
  title: string;
  subtitle: string;
}
`;

export const COLLAPSE_INPUTS_INTERFACE = `
interface CollapseInputs {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  name: string;
  value: boolean;
}
`;

export const INTERFACE_COLLAPSE_ITEMS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'label: string;' },
    description: { data: 'Define el texto del ítem colapsable.' },
  },
  {
    name: { data: 'title: string;' },
    description: { data: 'Define el título del ítem colapsable.' },
  },
  {
    name: { data: 'subtitle: string;' },
    description: { data: 'Define el subtítulo del ítem colapsable.' },
  },
];

export const INTERFACE_COLLAPSE_INPUTS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'id: string;' },
    description: {
      data: 'Proporciona un identificador único para el input colapsable.',
    },
  },
  {
    name: { data: 'icon: string;' },
    description: { data: 'Define el ícono para el input colapsable.' },
  },
  {
    name: { data: 'title: string;' },
    description: { data: 'Define el título para el input colapsable.' },
  },
  {
    name: { data: 'subtitle: string;' },
    description: { data: 'Define el subtítulo para el input colapsable.' },
  },
  {
    name: { data: 'name: string;' },
    description: { data: 'Proporciona un nombre para el input colapsable.' },
  },
  {
    name: { data: 'value: boolean;' },
    description: { data: 'Define el valor del elemento.' },
  },
];

export const COLLAPSE_SECTIONS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'o-collapse-header', customClasses: 'font-italic' },
    description: {
      data: 'Sección anclada a la parte superior del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-collapse-title', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-collapse-header, para establecer el título.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-collapse-subtitle', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-collapse-header, para establecer el subtítulo.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-collapse-label', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-collapse-header, para establecer el texto por encima del título.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-collapse-icon', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-collapse-header u o-collapse-input, para establecer el ícono.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-collapse-content', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para establecer el contenido del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-collapse-text', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-collapse-content, para establecer el texto.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-collapse-input', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para establecer el input del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-collapse-input-title', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-collapse-input, para establecer el título del input.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-collapse-input-subtitle', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-collapse-input, para establecer el subtítulo del input.',
      customClasses: '',
    },
  },
];

export const COLLAPSE_INPUT_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> icon: string', customClasses: '' },
    description: {
      data: 'Puede ser utilizado para establecer el ícono del input.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> name: string', customClasses: '' },
    description: { data: 'Especifica el name del input.', customClasses: '' },
  },
  {
    name: { data: '@Input() <br/> id: string', customClasses: '' },
    description: { data: 'Especifica el id del input.', customClasses: '' },
  },
  {
    name: { data: '@Input() <br/> value: boolean', customClasses: '' },
    description: {
      data: 'Puede ser usado en checked del input.',
      customClasses: '',
    },
  },
];

export const COLLAPSE_SECTIONS_EXAMPLE = `
<o-collapse identifier="collapseExample" [isWhite]="true">
  <o-collapse-header>
    <o-collapse-title>Título</o-collapse-title>
    <o-collapse-label>Volanta</o-collapse-label>
    <o-collapse-subtitle>Descripción</o-collapse-subtitle>
    <o-collapse-icon><i class="bx bxs-user-circle"></i></o-collapse-icon>
  </o-collapse-header>
  <o-collapse-content>
    <o-collapse-text>Esta es la descripción que se encuentra dentro de un colapsable.</o-collapse-text>
  </o-collapse-content>
</o-collapse>
`;

export const COLLAPSE_SECTIONS_EXAMPLE_INPUT = `
<o-collapse identifier="collapseExample">
  <o-collapse-header>
    <o-collapse-title>Título</o-collapse-title>
    <o-collapse-label>Volanta</o-collapse-label>
    <o-collapse-subtitle>Descripción</o-collapse-subtitle>
    <o-collapse-icon><i class="bx bxs-user-circle"></i></o-collapse-icon>
  </o-collapse-header>
  <o-collapse-content>
    <o-collapse-input id="visa" name="credit_card">
      <o-collapse-icon><i class="bx bxl-visa"></i></o-collapse-icon>
      <o-collapse-input-title>Visa Débito ****1234</o-collapse-input-title>
      <o-collapse-input-subtitle>Heraldo Paez</o-collapse-input-subtitle>
    </o-collapse-input>
    <hr />
    <o-collapse-input id="master" name="credit_card">
      <o-collapse-icon><i class="bx bxl-mastercard"></i></o-collapse-icon>
      <o-collapse-input-title>MasterCard Crédito ****5678</o-collapse-input-title>
      <o-collapse-input-subtitle>Heraldo Paez</o-collapse-input-subtitle>
    </o-collapse-input>
  </o-collapse-content>
</o-collapse>
`;

/* COLLAPSE EXAMPLES */
export const COLLAPSE_MULTIPLE_EXAMPLE_HTML = `
<div class="accordion">
  <o-collapse
    identifier="collapseOne"
    title="Título"
    content="Esta es la descripción que se encuentra dentro de un colapsable."
  >
  </o-collapse>

  <o-collapse
    identifier="collapseTwo"
    title="Título"
    content="Esta es la descripción que se encuentra dentro de un colapsable."
  >
  </o-collapse>

  <o-collapse
    identifier="collapseThree"
    title="Título"
    content="Esta es la descripción que se encuentra dentro de un colapsable."
  >
  </o-collapse>
</div>
`;

export const COLLAPSE_EXAMPLE_HTML = `
<div class="accordion" id="dataParent">
  <o-collapse
    identifier="collapseUniqueOne"
    dataParent="dataParent"
    title="Título"
    content="Esta es la descripción que se encuentra dentro de un colapsable."
  >
  </o-collapse>
  <o-collapse
    identifier="collapseUniqueTwo"
    dataParent="dataParent"
    title="Título"
    content="Esta es la descripción que se encuentra dentro de un colapsable."
  >
  </o-collapse>
  <o-collapse
    identifier="collapseUniqueThree"
    dataParent="dataParent"
    title="Título"
    content="Esta es la descripción que se encuentra dentro de un colapsable."
  >
  </o-collapse>
</div>
`;

export const COLLAPSE_WHITE_EXAMPLE_HTML = `
<o-collapse
  identifier="collapseWhite"
  [isWhite]="true"
  title="Título"
  icon="bx bxs-user-circle"
  content="Esta es la descripción que se encuentra dentro de un colapsable."
>
</o-collapse>
`;

export const COLLAPSE_ICON_EXAMPLE_HTML = `
<o-collapse
  identifier="collapseIcon"
  title="Título"
  icon="bx bxs-user-circle"
  content="Esta es la descripción que se encuentra dentro de un colapsable."
>
</o-collapse>
`;

export const COLLAPSE_ICON_LABEL_DESCRIPTION_EXAMPLE_HTML = `
<o-collapse
  identifier="collapseLabelDescription"
  title="Título"
  icon="bx bxs-user-circle"
  label="Volanta"
  subtitle="Descripción"
  content="Esta es la descripción que se encuentra dentro de un colapsable."
>
</o-collapse>
`;

export const COLLAPSE_TEXT_EXAMPLE_HTML = `
<o-collapse
  identifier="collapseText"
  title="Título"
  content="Esta es la descripción que se encuentra dentro de un colapsable."
></o-collapse>
`;

export const COLLAPSE_LIST_EXAMPLE_HTML = `
<o-collapse
  identifier="collapseList"
  title="$450,00"
  label="Total a pagar"
  [children]="[
    {
      label: '$200,00',
      title: 'Solicitud de informes varios',
      subtitle: 'Boleta N° 2549-48758798'
    },
    {
      label: '$200,00',
      title: 'Solicitud de informes varios',
      subtitle: 'Boleta N° 2549-48758798'
    }
  ]"
>
</o-collapse>
`;

export const COLLAPSE_LIST_INPUTS_EXAMPLE_HTML = `
<o-collapse
  identifier="collapseListInputs"
  title="Tarjeta de crédito / débito"
  subtitle="VISA, MasterCard, AMEX, CABAL, Maestro"
  [children]="[
    {
      icon: 'bx bxl-visa',
      title: 'Visa Débito ****1234',
      subtitle: 'Heraldo Paez',
      id: 'visa',
      name: 'credit_card',
      value: false
    },
    {
      icon: 'bx bxl-mastercard',
      title: 'MasterCard Crédito ****5678',
      subtitle: 'Heraldo Paez',
      id: 'master',
      name: 'credit_card',
      value: true
    }
  ]"
>
</o-collapse>
`;
