import { DataSource } from '@gcba/ngx-obelisco/core/models';

export const BUTTON_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/button/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/button/examples'
  }
];

/* BUTTON-API */
export const BUTTON_GENERAL_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> type: ButtonTypes', customClasses: '' },
    description: { data: 'Se utiliza para establecer el tipo de botón. Por defecto es primary.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> isOutline: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir si es un botón con borde. Por defecto es false.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> size: Sizes', customClasses: '' },
    description: { data: 'Se utiliza para establecer el tamaño del botón. Por defecto es mediano.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> isExpandable: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir si es un botón expandible. Por defecto es false.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> ariaLabel: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo aria-label, en el caso de que el botón no posea texto.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> hasIcon: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir si el botón tiene un ícono.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> hasSpinner: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir si el botón tiene un spinner.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: ''
    }
  }
];

export const BUTTON_LINK_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> route: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir la ruta de la etiqueta &lt;a&gt;, mediante el routerLink de Angular.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> link: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el link de la etiqueta &lt;a&gt;, mediante el href de HTML.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> target: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo target de la etiqueta &lt;a&gt;. Por defecto es "_blank".',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> download: string', customClasses: '' },
    description: { data: 'Se utiliza para definir el atributo download de la etiqueta &lt;a&gt;.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> rel: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo rel de la etiqueta &lt;a&gt;. Por defecto es "noreferrer".',
      customClasses: ''
    }
  }
];

export const BUTTON_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> isDisabled: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir tiene el atributo "disabled".', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> dataTarget: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo "data-target" de la etiqueta &lt;button&gt;.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> dataToggle: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo "data-toggle" de la etiqueta &lt;button&gt;.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> dataDismiss: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo "data-dismiss" de la etiqueta &lt;button&gt;.',
      customClasses: ''
    }
  }
];

export const BUTTON_TYPES = `
  type ButtonTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'link' ;
`;

/* BUTTON-EXAMPLES */
export const BUTTON_EXAMPLE_TYPES = `
<o-button (click)="alert()">Botón</o-button>
<o-button type="secondary" (click)="alert()">Botón</o-button>
<o-button type="success" (click)="alert()">Botón</o-button>
<o-button type="danger" (click)="alert()">Botón</o-button>
<o-button type="link" (click)="alert()">Botón</o-button>
<o-button link="https://www.google.com/">Enlace</o-button>

<o-button (click)="alert()" [isOutline]="true">Botón</o-button>
<o-button type="secondary" (click)="alert()" [isOutline]="true">Botón</o-button>
<o-button type="success" (click)="alert()" [isOutline]="true">Botón</o-button>
<o-button type="danger" (click)="alert()" [isOutline]="true">Botón</o-button>
<o-button type="link" (click)="alert()" [isOutline]="true">Botón</o-button>
<o-button link="https://www.google.com/" [isOutline]="true">Enlace</o-button>
`;
export const BUTTON_EXAMPLE_TYPES_TS = `
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

export const BUTTON_EXAMPLE_SIZES = `
<o-button size="sm">Botón</o-button>
<o-button>Botón</o-button>
<o-button size="lg">Botón</o-button>
`;

export const BUTTON_EXAMPLE_BLOCK = `
<o-button [isExpandable]="true">Expandible</o-button>
`;

export const BUTTON_EXAMPLE_ICON = `
<o-button size="sm" [hasIcon]="true">
  <span class="material-icons-round" aria-hidden="true">info</span>
  Botón
</o-button>
<o-button [hasIcon]="true">
  <i class="bx bxs-info-circle"></i>
  Botón
</o-button>
<o-button size="lg" [hasIcon]="true">
  <span class="material-icons-round" aria-hidden="true">info</span>
  Botón
</o-button>

<o-button size="sm" [hasIcon]="true" ariaLabel="Botón">
  <span class="material-icons-round" aria-hidden="true">info</span>
</o-button>
<o-button [hasIcon]="true" ariaLabel="Botón">
  <i class="bx bxs-info-circle"></i>
</o-button>
<o-button size="lg" [hasIcon]="true" ariaLabel="Botón">
  <span class="material-icons-round" aria-hidden="true">info</span>
</o-button>
`;

export const BUTTON_EXAMPLE_SPINNER = `
<o-button [hasSpinner]="true">
  <o-spinner type="dark" size="sm"></o-spinner> Botón
</o-button>
<o-button type="secondary" [hasSpinner]="true">
  <o-spinner type="light" size="sm"></o-spinner> Botón
</o-button>
<o-button type="success" [hasSpinner]="true">
  <o-spinner type="light" size="sm"></o-spinner> Botón
</o-button>
<o-button type="danger" [hasSpinner]="true">
  <o-spinner type="light" size="sm"></o-spinner> Botón
</o-button>
<o-button type="link" [hasSpinner]="true">
  <o-spinner type="info" size="sm"></o-spinner> Botón
</o-button>

<o-button [hasSpinner]="true" [isOutline]="true">
  <o-spinner type="dark" size="sm"></o-spinner> Botón
</o-button>
<o-button type="secondary" [hasSpinner]="true" [isOutline]="true">
  <o-spinner type="secondary" size="sm"></o-spinner> Botón
</o-button>
<o-button type="success" [hasSpinner]="true" [isOutline]="true">
  <o-spinner type="success" size="sm"></o-spinner> Botón
</o-button>
<o-button type="danger" [hasSpinner]="true" [isOutline]="true">
  <o-spinner type="danger" size="sm"></o-spinner> Botón
</o-button>
<o-button type="link" [hasSpinner]="true" [isOutline]="true">
  <o-spinner type="info" size="sm"></o-spinner> Botón
</o-button>
`;
