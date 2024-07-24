export const PAGINATION_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/pagination/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/pagination/examples'
  }
];

export const PAGINATION_START_EXAMPLE_HTML = `
<o-pagination
  [totalPages]="10"
  [currentPage]="1"
  ariaLabel="Ejemplo de paginación inicial"
  (currentPageChange)="actualPage($event)"
></o-pagination>
`;

export const PAGINATION_MID_EXAMPLE_HTML = `
<o-pagination
  [totalPages]="10"
  [currentPage]="5"
  ariaLabel="Ejemplo de paginación central"
  (currentPageChange)="actualPage($event)"
></o-pagination>
`;

export const PAGINATION_END_EXAMPLE_HTML = `
<o-pagination
  [totalPages]="10"
  [currentPage]="10"
  ariaLabel="Ejemplo de paginación final"
  (currentPageChange)="actualPage($event)"
></o-pagination>
`;

export const PAGINATION_WITHOUT_NUMBERS_EXAMPLE_HTML = `
<o-pagination
  [totalPages]="10"
  [currentPage]="5"
  [isDiscriptiveType]="true"
  ariaLabel="Ejemplo de paginación sin numerado"
  (currentPageChange)="actualPage($event)"
></o-pagination>
`;

export const PAGINATION_EXAMPLE_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public actualPage(event: number): void {
    console.log(event);
  }
}
`;
