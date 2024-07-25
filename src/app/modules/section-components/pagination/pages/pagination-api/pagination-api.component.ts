import { Component } from '@angular/core';
import { DataSource } from 'ngx-obelisco-17/core/models';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-pagination-api',
  templateUrl: './pagination-api.component.html',
  styleUrls: ['./pagination-api.component.scss'],
})
export class PaginationApiComponent {
  dataSourcePaginationProperties: DataSource[] = [
    {
      name: { data: '@Input() <br/> totalPages: number', customClasses: '' },
      description: {
        data: 'Se utiliza para establecer el número total de páginas.',
        customClasses: '',
      },
    },
    {
      name: { data: '@Input() <br/> ariaLabel: string', customClasses: '' },
      description: {
        data: 'Se utiliza para establecer el texto de la etiqueta aria-label.',
        customClasses: '',
      },
    },
    {
      name: { data: '@Input() <br/> currentPage: number', customClasses: '' },
      description: {
        data: 'Se utiliza para establecer la página actual. Por defecto es 1.',
        customClasses: '',
      },
    },
    {
      name: {
        data: '@Input() <br/> isDiscriptiveType: boolean',
        customClasses: '',
      },
      description: {
        data: 'Se utiliza para ocultar los botones de numeración.',
        customClasses: '',
      },
    },
    {
      name: {
        data: '@Input() <br /> customClasses: string',
        customClasses: '',
      },
      description: {
        data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
        customClasses: '',
      },
    },
  ];

  dataSourcePaginationMethods: DataSource[] = [
    {
      name: {
        data: '@Output() <br/> currentPageChange: EventEmitter&lt;number&gt;',
        customClasses: '',
      },
      description: {
        data: 'Se utiliza para obtener la página actual.',
        customClasses: '',
      },
    },
  ];

  public columnsPagination = COLUMNS;
}
