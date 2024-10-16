import { DataSource } from 'ngx-obelisco-17/core/models';

export const BUTTON_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/button/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/button/examples',
  },
];

/* BUTTON-API */
export const BUTTON_GENERAL_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> type: ButtonTypes', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el tipo de botón. Por defecto es primary.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isOutline: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para definir si es un botón con borde. Por defecto es false.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> size: ButtonSizes', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el tamaño del botón. Por defecto es mediano.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isExpandable: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para definir si es un botón expandible. Por defecto es false.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> ariaLabel: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo aria-label, en el caso de que el botón no posea texto.',
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

export const BUTTON_LINK_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> route: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir la ruta de la etiqueta &lt;a&gt;, mediante el routerLink de Angular.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> link: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el link de la etiqueta &lt;a&gt;, mediante el href de HTML.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> target: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo target de la etiqueta &lt;a&gt;. Por defecto es "_blank".',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> download: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo download de la etiqueta &lt;a&gt;.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> rel: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo rel de la etiqueta &lt;a&gt;. Por defecto es "noopener noreferrer".',
      customClasses: '',
    },
  },
];

export const BUTTON_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> isDisabled: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para definir tiene el atributo "disabled".',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> dataTarget: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo "data-bs-target" de la etiqueta &lt;button&gt;.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> dataToggle: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo "data-bs-toggle" de la etiqueta &lt;button&gt;.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> dataDismiss: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo "data-bs-dismiss" de la etiqueta &lt;button&gt;.',
      customClasses: '',
    },
  },
];

export const BUTTON_TYPES = `
  type ButtonTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'link' ;
`;
export const BUTTON_SIZES_TYPE = `
  type ButtonSizes = "xs" | "sm" | "md" | "lg";
`;

/* BUTTON-EXAMPLES */
export const BUTTON_TYPES_SOLID = `
<o-button (click)="alert()">Botón</o-button>
<o-button type="secondary" (click)="alert()">Botón</o-button>
<o-button type="success" (click)="alert()">Botón</o-button>
<o-button type="danger" (click)="alert()">Botón</o-button>
<o-button type="link" (click)="alert()">Botón</o-button>
`;
export const BUTTON_TYPES_BORDER = `
<o-button (click)="alert()" [isOutline]="true">Botón</o-button>
<o-button type="secondary" (click)="alert()" [isOutline]="true">Botón</o-button>
<o-button type="success" (click)="alert()" [isOutline]="true">Botón</o-button>
<o-button type="danger" (click)="alert()" [isOutline]="true">Botón</o-button>
<o-button type="link" (click)="alert()" [isOutline]="true">Botón</o-button>
`;
export const BUTTON_TYPES_LINK = `
<o-button link="https://www.google.com/">Enlace</o-button>
<o-button link="https://www.google.com/" [isOutline]="true">Enlace</o-button>
`;
export const BUTTON_TYPES_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public alert() {
    alert('Botón');
  }
}`;

export const BUTTON_SIZES = `
<o-button size="sm">Botón</o-button>
<o-button>Botón</o-button>
<o-button size="lg">Botón</o-button>
`;

export const BUTTON_BLOCK = `
<o-button [isExpandable]="true">Expandible</o-button>
`;

export const BUTTON_ICON = `
<o-button size="sm">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">info</span>
  Botón
</o-button>
<o-button>
  <i class="bx bxs-info-circle o-icon"></i>
  Botón
</o-button>
<o-button size="lg">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">info</span>
  Botón
</o-button>

<o-button size="sm" ariaLabel="Botón">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">info</span>
</o-button>
<o-button ariaLabel="Botón">
  <i class="bx bxs-info-circle o-icon"></i>
</o-button>
<o-button size="lg" ariaLabel="Botón">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">info</span>
</o-button>
`;

export const BUTTON_SPINNER = `
<o-button>
  <o-spinner type="light" size="sm"></o-spinner> Botón
</o-button>
<o-button type="secondary">
  <o-spinner type="light" size="sm"></o-spinner> Botón
</o-button>
<o-button type="success">
  <o-spinner type="light" size="sm"></o-spinner> Botón
</o-button>
<o-button type="danger">
  <o-spinner type="light" size="sm"></o-spinner> Botón
</o-button>
<o-button type="link">
  <o-spinner type="info" size="sm"></o-spinner> Botón
</o-button>

<o-button [isOutline]="true">
  <o-spinner type="primary" size="sm"></o-spinner> Botón
</o-button>
<o-button type="secondary" [isOutline]="true">
  <o-spinner type="secondary" size="sm"></o-spinner> Botón
</o-button>
<o-button type="success" [isOutline]="true">
  <o-spinner type="success" size="sm"></o-spinner> Botón
</o-button>
<o-button type="danger" [isOutline]="true">
  <o-spinner type="danger" size="sm"></o-spinner> Botón
</o-button>
<o-button type="link" [isOutline]="true">
  <o-spinner type="info" size="sm"></o-spinner> Botón
</o-button>
`;
export const BUTTON_SIZE_XS = `
<o-button size="xs" aria-label="Editar">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
</o-button>
<o-button size="xs" aria-label="Eliminar">
  <i class="bx bxs-trash-alt o-icon"></i>
</o-button>
<o-button size="xs" aria-label="Visualizar" link="#">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
</o-button>
<o-button size="xs" aria-label="Descargar">
  <i class="bx bxs-download o-icon"></i>
</o-button>
`;
