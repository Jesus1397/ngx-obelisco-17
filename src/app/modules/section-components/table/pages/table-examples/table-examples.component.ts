import { Component } from '@angular/core';
import { Column, DataSource } from 'ngx-obelisco-17/core/models';
import {
  TABLE_EXAMPLE_BORDERED_HTML,
  TABLE_EXAMPLE_NORMAL_HTML,
  TABLE_EXAMPLE_NORMAL_TS,
  TABLE_EXAMPLE_SELECTABLE_HTML,
  TABLE_EXAMPLE_SELECTABLE_TS,
  TABLE_EXAMPLE_STRIPED_HTML,
} from 'src/app/constants/table.constants';

@Component({
  selector: 'app-table-examples',
  templateUrl: './table-examples.component.html',
  styleUrls: ['./table-examples.component.scss'],
})
export class TableExamplesComponent {
  public exampleNormalHTML = TABLE_EXAMPLE_NORMAL_HTML;
  public exampleNormalTS = TABLE_EXAMPLE_NORMAL_TS;
  public exampleBorderedHTML = TABLE_EXAMPLE_BORDERED_HTML;
  public exampleStripedHTML = TABLE_EXAMPLE_STRIPED_HTML;
  public exampleSelectableHTML = TABLE_EXAMPLE_SELECTABLE_HTML;
  public exampleSelectableTS = TABLE_EXAMPLE_SELECTABLE_TS;

  public outputData: any;

  onDataSelectedChange(data: any[]): void {
    console.log('Datos seleccionados:', data);
    this.outputData = data;
  }

  columns: Column[] = [
    { key: 'number', value: 'Número', customClasses: 'tb-number' },
    { key: 'text', value: 'Texto', customClasses: 'tb-text' },
    { key: 'link', value: 'Enlace', customClasses: 'tb-link' },
    { key: 'button', value: 'Botón', customClasses: 'tb-button' },
    { key: 'tag', value: 'Etiqueta', customClasses: 'tb-tag' },
    { key: 'icon', value: 'Bóton con ícono', customClasses: 'tb-button ' },
  ];

  dataSource: DataSource[] = [
    {
      number: { data: '1', customClasses: 'text-right' },
      text: { data: 'Juan' },
      link: {
        data: '<a href="#" target="_blank" rel="noreferrer">Enlace</a>',
      },
      button: {
        data: `
          <button type="button" class="btn btn-primary btn-icon">
            <i class="bx bxs-info-circle"></i>
            botón
          </button>`,
      },
      tag: {
        data: `<span class="badge badge-secondary">Etiqueta 1</span>`,
      },
      icon: {
        data: `
          <div class="actions-table">
            <button class="btn button-actions-table" aria-label="Editar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
            </button>
            <button class="btn button-actions-table" aria-label="Visualizar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
            </button>
            <button class="btn button-actions-table" aria-label="Descargar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
            </button>
            <button class="btn button-actions-table" aria-label="Eliminar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
            </button>
          </div>`,
      },
    },
    {
      number: { data: '2', customClasses: 'text-right' },
      text: { data: 'Maria' },
      link: {
        data: '<a href="#" target="_blank" rel="noreferrer">Enlace</a>',
      },
      button: {
        data: `
          <button type="button" class="btn btn-primary btn-icon">
            <i class="bx bxs-info-circle"></i>
            botón
          </button>`,
      },
      tag: {
        data: `<span class="badge badge-secondary">Etiqueta 1</span>`,
      },
      icon: {
        data: `
          <div class="actions-table">
            <button class="btn button-actions-table" aria-label="Editar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
            </button>
            <button class="btn button-actions-table" aria-label="Visualizar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
            </button>
            <button class="btn button-actions-table" aria-label="Descargar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
            </button>
            <button class="btn button-actions-table" aria-label="Eliminar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
            </button>
          </div>`,
      },
    },
    {
      number: { data: '3', customClasses: 'text-right' },
      text: { data: 'Esther' },
      link: {
        data: '<a href="#" target="_blank" rel="noreferrer">Enlace</a>',
      },
      button: {
        data: `
          <button type="button" class="btn btn-primary btn-icon">
            <i class="bx bxs-info-circle"></i>
            botón
          </button>`,
      },
      tag: {
        data: `<span class="badge badge-secondary">Etiqueta 1</span>`,
      },
      icon: {
        data: `
          <div class="actions-table">
            <button class="btn button-actions-table" aria-label="Editar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
            </button>
            <button class="btn button-actions-table" aria-label="Visualizar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
            </button>
            <button class="btn button-actions-table" aria-label="Descargar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
            </button>
            <button class="btn button-actions-table" aria-label="Eliminar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
            </button>
          </div>`,
      },
    },
    {
      number: { data: '4', customClasses: 'text-right' },
      text: { data: 'José' },
      link: {
        data: '<a href="#" target="_blank" rel="noreferrer">Enlace</a>',
      },
      button: {
        data: `
          <button type="button" class="btn btn-primary btn-icon">
            <i class="bx bxs-info-circle"></i>
            botón
          </button>`,
      },
      tag: {
        data: `<span class="badge badge-secondary">Etiqueta 1</span>`,
      },
      icon: {
        data: `
          <div class="actions-table">
            <button class="btn button-actions-table" aria-label="Editar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
            </button>
            <button class="btn button-actions-table" aria-label="Visualizar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
            </button>
            <button class="btn button-actions-table" aria-label="Descargar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
            </button>
            <button class="btn button-actions-table" aria-label="Eliminar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
            </button>
          </div>`,
      },
    },
  ];
}
