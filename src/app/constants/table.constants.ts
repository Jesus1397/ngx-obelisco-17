import { DataSource } from 'ngx-obelisco-17/core/models';

export const TABLE_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/table/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/table/examples',
  },
];

export const TABLE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> id: string' },
    description: {
      data: 'Se utiliza para definir el identificador de la tabla.',
    },
  },
  {
    name: { data: '@Input() <br/> columns: Column[]' },
    description: {
      data: 'Se utiliza para definir las columnas que se mostrarán en la tabla.',
    },
  },
  {
    name: { data: '@Input() <br/> dataSource: DataSource[]' },
    description: {
      data: 'Se utiliza para definir los datos que se mostrarán en la tabla.',
    },
  },
  {
    name: { data: '@Input() <br/> isBordered: boolean' },
    description: { data: 'Se utiliza para definir si la tabla tendrá bordes.' },
  },
  {
    name: { data: '@Input() <br/> isStriped: boolean' },
    description: { data: 'Se utiliza para definir si la tabla tendrá rayas.' },
  },
  {
    name: { data: '@Input() <br/> isScrollable: boolean' },
    description: {
      data: 'Se utiliza para habilitar el desplazamiento horizontal de la tabla.',
    },
  },
  {
    name: { data: '@Input() <br /> customClasses: string' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente.',
    },
  },
  {
    name: { data: '@Input() <br/> checkbox: TableCheckbox' },
    description: {
      data: 'Se utiliza para habilitar las casillas de verificación en la tabla.',
    },
  },
];

export const TABLE_DATA_SOURCE_METHODS: DataSource[] = [
  {
    name: {
      data: '@Output() <br/> dataSelectedChange: EventEmitter&lt;DataSource[]&gt',
    },
    description: { data: 'Se utiliza para obtener el elemento seleccionado.' },
  },
];

export const TABLA_COLUMN_INTERFACE: DataSource[] = [
  {
    name: { data: 'key' },
    description: {
      data: 'Se utiliza para definir el nombre de la propiedad del objeto. <br /> Que tiene que ser igual al que se especifica en el dataSource.',
      customClasses: '',
    },
  },
  {
    name: { data: 'value' },
    description: {
      data: 'Se utiliza para definir el nombre de la columna.',
      customClasses: '',
    },
  },
  {
    name: { data: 'customClasses' },
    description: {
      data: 'Se utiliza para definir clases para personalizar la columna.',
      customClasses: '',
    },
  },
];

export const TABLA_DATASOURCE_INTERFACE: DataSource[] = [
  {
    name: {
      data: '[key: string]: <br/>{ data: string; customClasses?: string } ',
    },
    description: {
      data: 'Se utiliza para definir el esquema de datos para el origen de datos de la tabla. Cada clave representa una columna en la tabla, y su valor es un objeto que contiene los datos de la columna y opcionalmente clases personalizadas para esa columna.',
    },
  },
];

export const TABLA_TABLECHECKBOX_INTERFACE: DataSource[] = [
  {
    name: { data: 'title: string' },
    description: {
      data: 'Se utiliza para definir el título de la casilla de verificación que permite seleccionar todas las filas de la tabla.',
    },
  },
  {
    name: { data: 'customClassesTh: string' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al encabezado de la columna de la casilla de verificación.',
    },
  },
  {
    name: { data: 'customClassesLabel: string' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas a la etiqueta de la casilla de verificación.',
    },
  },
  {
    name: { data: 'isAllSelectable: string' },
    description: {
      data: 'Se utiliza para definir si todas las filas de la tabla son seleccionables cuando se selecciona la casilla de verificación "Seleccionar todo".',
    },
  },
];

export const TABLA_INTERFACE_COLUMN = `
interface Column {
  key: string;
  value: string;
  customClasses: string;
}
`;

export const TABLA_INTERFACE_DATASOURCE = `
interface DataSource {
  [key: string]: { data: string; customClasses?: string };
}
`;

export const TABLA_INTERFACE_TABLECHECKBOX = `
interface TableCheckbox {
  title?: string;
  customClassesTh?: string;
  customClassesLabel?: string;
  isAllSelectable?: boolean;
}
`;

export const TABLE_EXAMPLE_NORMAL_HTML = `
<o-table
  [columns]="columns"
  [dataSource]="dataSource"
  [isScrollable]="true"
></o-table>`;

export const TABLE_EXAMPLE_BORDERED_HTML = `
<o-table
  [columns]="columns"
  [dataSource]="dataSource"
  [isBordered]="true"
  [isScrollable]="true"
></o-table>`;

export const TABLE_EXAMPLE_STRIPED_HTML = `
<o-table
  [columns]="columns"
  [dataSource]="dataSource"
  [isStriped]="true"
  [isScrollable]="true"
></o-table>`;

export const TABLE_EXAMPLE_SELECTABLE_HTML = `
<o-table
  id="table-checkbox-test"
  [columns]="columns"
  [dataSource]="dataSource"
  [checkbox]="{
    title: 'Checkbox',
    isAllSelectable: true
  }"
  [isScrollable]="true"
  (dataSelectedChange)="onDataSelectedChange($event)"
></o-table>`;
export const TABLE_EXAMPLE_NORMAL_TS = `
import { Component, OnInit } from '@angular/core';
import { Column, DataSource } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  columns: Column[] = [
    { key: 'number', value: 'Número', customClasses: 'tb-number' },
    { key: 'text', value: 'Texto', customClasses: 'tb-text' },
    { key: 'link', value: 'Enlace', customClasses: 'tb-link' },
    { key: 'button', value: 'Botón', customClasses: 'tb-button' },
    { key: 'tag', value: 'Etiqueta', customClasses: 'tb-tag' },
    { key: 'icon', value: 'Bóton con ícono', customClasses: 'tb-button ' }
  ];

  dataSource: DataSource[] = [
    {
      number: { data: '1', customClasses: 'text-right' },
      text: { data: 'Juan' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '2', customClasses: 'text-right' },
      text: { data: 'Maria' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '3', customClasses: 'text-right' },
      text: { data: 'Esther' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '4', customClasses: 'text-right' },
      text: { data: 'José' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    }
  ];

  // Definición de partes comunes
  linkHtml = '<a href="#" target="_blank" rel="noreferrer">Enlace</a>';

  buttonHtml = \`
    <button type="button" class="btn btn-primary btn-icon">
      <i class="bx bxs-info-circle"></i>
      botón
    </button>\`;

  iconsHtml = \`
    <div class="actions-table">
      <button class="btn btn-xs" aria-label="Editar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
      </button>
      <button class="btn btn-xs" aria-label="Visualizar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
      </button>
      <button class="btn btn-xs" aria-label="Descargar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
      </button>
      <button class="btn btn-xs" aria-label="Eliminar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
      </button>
    </div>\`;
}
`;

export const TABLE_EXAMPLE_SELECTABLE_TS = `
import { Component, OnInit } from '@angular/core';
import { Column, DataSource } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  columns: Column[] = [
    { key: 'number', value: 'Número', customClasses: 'tb-number' },
    { key: 'text', value: 'Texto', customClasses: 'tb-text' },
    { key: 'link', value: 'Enlace', customClasses: 'tb-link' },
    { key: 'button', value: 'Botón', customClasses: 'tb-button' },
    { key: 'tag', value: 'Etiqueta', customClasses: 'tb-tag' },
    { key: 'icon', value: 'Bóton con ícono', customClasses: 'tb-button ' }
  ];

  dataSource: DataSource[] = [
    {
      number: { data: '1', customClasses: 'text-right' },
      text: { data: 'Juan' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '2', customClasses: 'text-right' },
      text: { data: 'Maria' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '3', customClasses: 'text-right' },
      text: { data: 'Esther' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '4', customClasses: 'text-right' },
      text: { data: 'José' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    }
  ];

  onDataSelectedChange(data: any[]): void {
    console.log('Datos seleccionados:', data);
  }

  // Definición de partes comunes
  linkHtml = '<a href="#" target="_blank" rel="noreferrer">Enlace</a>';

  buttonHtml = \`
    <button type="button" class="btn btn-primary btn-icon">
      <i class="bx bxs-info-circle"></i>
      botón
    </button>\`;

  iconsHtml = \`
    <div class="actions-table">
      <button class="btn btn-xs" aria-label="Editar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
      </button>
      <button class="btn btn-xs" aria-label="Visualizar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
      </button>
      <button class="btn btn-xs" aria-label="Descargar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
      </button>
      <button class="btn btn-xs" aria-label="Eliminar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
      </button>
    </div>\`;
}
`;
