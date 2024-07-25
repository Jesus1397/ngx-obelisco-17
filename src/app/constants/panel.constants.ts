import {
  DataSource,
  MediaSizes,
  MediaPanel,
} from '@gcba/ngx-obelisco-17/core/models';

export const PANEL_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/panel/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/panel/examples',
  },
];

export const PANEL_IMAGE: MediaPanel = {
  src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
  alt: 'descripción de imagen',
};

export const PANEL_IMAGE_LARGE: MediaPanel = {
  src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
  alt: 'descripción de imagen',
  size: 'lg' as MediaSizes,
};

export const PANEL_SMALL_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> title: string', customClasses: '' },
    description: {
      data: 'Propiedad de entrada para el título del panel pequeño.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> description: string', customClasses: '' },
    description: {
      data: 'Propiedad de entrada para la descripción del panel pequeño.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> image: MediaPanel', customClasses: '' },
    description: {
      data: 'Define la imagen principal del destacado.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isBgWhite: boolean', customClasses: '' },
    description: {
      data: 'Propiedad de entrada para indicar si el fondo del panel pequeño es blanco.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isBgLight: boolean', customClasses: '' },
    description: {
      data: 'Propiedad de entrada para indicar si el fondo del panel pequeño es claro.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isVertical: boolean', customClasses: '' },
    description: {
      data: 'Propiedad de entrada para indicar si el panel pequeño es vertical. Por defecto es horizontal',
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

export const PANEL_SMALL_HORIZONTAL = `
<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image">
</o-panel-small>
`;

export const PANEL_SMALL_LARGE_IMAGE_TS = `
import { Component } from '@angular/core';
import { MediaSizes, MediaPanel } from '@gcba/ngx-obelisco-17/core/models';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public title: string = 'Nombre del titular';

  public description: string = 'Descripción de hasta 3 líneas para mantener los estándares de lectura en los componentes de Obelisco.';

  public image: MediaPanel = {
    src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
    alt: 'descripción de imagen',
    size: 'lg' as MediaSizes
  };
}
`;

export const PANEL_SMALL_TS = `
import { Component } from '@angular/core';
import { MediaPanel } from '@gcba/ngx-obelisco-17/core/models';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public title: string = 'Nombre del titular';

  public description: string = 'Descripción de hasta 3 líneas para mantener los estándares de lectura en los componentes de Obelisco.';

  public image: MediaPanel = {
    src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
    alt: 'descripción de imagen'
  };
}
`;

export const PANEL_SMALL_VERTICAL = `
<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image"
  [isVertical]="true">
</o-panel-small>
`;

export const PANEL_SMALL_WITH_BG = `
<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image"
  [isVertical]="true"
  [isBgWhite]="true">
</o-panel-small>

<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image"
  [isVertical]="true"
  [isBgLight]="true">
</o-panel-small>
`;

export const PANEL_SMALL_ITEMS_VERTICAL = `
<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image"
  [isVertical]="true">
  <ng-container #listLinkContent>
    <h4 class="list-link-item-title">Nombre del archivo</h4>
    <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>
    <h4 class="list-link-item-title">Nombre del archivo</h4>
    <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>
    <h4 class="list-link-item-title">Nombre del archivo</h4>
    <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>
  </ng-container>
</o-panel-small>
`;

export const PANEL_SMALL_ITEMS_HORIZONTAL = `
<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image"
  [isVertical]="true">
  <ng-container #panelFooterContent>
    <button type="button" class="btn btn-secondary btn-sm card-link">Acción 1</button>
    <button type="button" class="btn btn-link btn-sm card-link">Acción 2</button>
  </ng-container>
</o-panel-small>
`;

export const MEDIAPANEL_INTERFACE = `
interface Media {
  src: string;
}

interface MediaPanel extends Media {
  size: MediaSizes;
  alt: string;
}
`;

export const MEDIAPANEL_DATA_SOURCE = [
  {
    name: { data: 'src: string' },
    description: {
      data: 'Se utiliza para definir la url del elemento multimedia.',
    },
  },
  {
    name: { data: 'size: MediaSizes' },
    description: { data: 'Se utiliza para definir el tamaño de la imagen.' },
  },
  {
    name: { data: 'alt: string' },
    description: {
      data: 'Se utiliza para definir el texto alternativo de la imagen.',
    },
  },
];

export const MEDIA_SIZE_TYPES = `
  type MediaSizes = 'sm' | 'md' | 'lg';
`;
