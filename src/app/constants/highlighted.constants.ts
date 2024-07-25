import { DataSource } from '@gcba/ngx-obelisco-17/core/models';

import {
  MediaIframe,
  MediaVideo,
  MediaImage,
} from '@gcba/ngx-obelisco-17/core/models';

export const HIGHLIGHTED_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/highlighted/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/highlighted/examples',
  },
];

export const HIGHLIGHTED_TITLE = 'Título de destacado';

export const HIGHLIGHTED_DESCRIPTION =
  'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces';

export const HIGHLIGHTED_DESCRIPTION_SM =
  'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces.';

export const HIGHLIGHTED_PICTURE: MediaImage = {
  src: 'https://gcba.github.io/Obelisco/panel/destacado.jpeg',
  alt: 'descripción de imagen',
};

export const HIGHLIGHTED_VIDEO: MediaVideo = {
  src: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.mp4',
  title: 'Buenos Aires se escribe en plural',
  track: 'assets/panel/videoBuenosAires.vtt',
};

export const HIGHLIGHTED_IFRAME: MediaIframe = {
  src: 'https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw',
  title: 'Buenos Aires se escribe en plural',
};

//HIGHLIGHTED API
export const HIGHLIGHTED_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> type: HighlightedType', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el tipo de destacado. Por defecto es banner.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> title: string', customClasses: '' },
    description: {
      data: 'Establece el título del destacado.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> description: string', customClasses: '' },
    description: {
      data: 'Define el contenido de texto principal del destacado.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> image: MediaImage' },
    description: { data: 'Define la imagen principal del destacado.' },
  },
  {
    name: { data: '@Input() <br/> video: MediaVideo' },
    description: { data: 'Define el video principal del destacado.' },
  },
  {
    name: { data: '@Input() <br/> iframe: MediaIframe' },
    description: { data: 'Define el iframe principal del destacado.' },
  },
  {
    name: { data: '@Input() <br/> isBgLight: boolean', customClasses: '' },
    description: {
      data: 'Propiedad de entrada para indicar si el fondo del destacado es claro. Por defecto es false.',
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

export const HIGHLIGHTED_TYPES = `
  type HighlightedType = 'banner' | 'grouping' | 'lateral';
`;

export const MEDIAIMAGE_INTERFACE = `
interface Media {
  src: string;
}

interface MediaImage extends Media {
  alt: string;
}
`;

export const MEDIAVIDEO_INTERFACE = `
interface Media {
  src: string;
}

interface MediaVideo extends Media {
  track: string;
  title: string;
}
`;

export const MEDIAIFRAME_INTERFACE = `
interface Media {
  src: string;
}
  
interface MediaIframe extends Media {
  title: string;
}
`;

export const MEDIAIMAGE_DATA_SOURCE = [
  {
    name: { data: 'src: string' },
    description: {
      data: 'Se utiliza para definir la url del elemento multimedia.',
    },
  },
  {
    name: { data: 'alt: string' },
    description: {
      data: 'Se utiliza para definir el texto alternativo de la imagen.',
    },
  },
];

export const MEDIAVIDEO_DATA_SOURCE = [
  {
    name: { data: 'src: string' },
    description: {
      data: 'Se utiliza para definir la url del elemento multimedia.',
    },
  },
  {
    name: { data: 'track: string' },
    description: {
      data: 'Se utiliza para definir la ruta al elemento con formato WebVTT (archivos .vtt).',
    },
  },
  {
    name: { data: 'title: string' },
    description: { data: 'Se utiliza para definir el título del video.' },
  },
];

export const MEDIAIFRAME_DATA_SOURCE = [
  {
    name: { data: 'src: string' },
    description: {
      data: 'Se utiliza para definir la url del elemento multimedia.',
    },
  },
  {
    name: { data: 'title: string' },
    description: { data: 'Se utiliza para definir el título del iframe.' },
  },
];

export const HIGHLIGHTED_SECTIONS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'o-highlighted-header', customClasses: 'font-italic' },
    description: {
      data: 'Sección anclada a la parte superior del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-highlighted-title', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-highlighted-header, para establecer el título del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-highlighted-content', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para establecer el contenido del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-highlighted-description', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-highlighted-content, para establecer el texto descriptivo del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-highlighted-image', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para establecer la imagen del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-highlighted-video', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para establecer el video del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-highlighted-footer', customClasses: 'font-italic' },
    description: {
      data: 'Sección anclada a la parte inferior del componente que contiene accionables.',
      customClasses: '',
    },
  },
];

export const HIGHLIGHTED_SECTIONS_IMAGE = `
<o-highlighted>
  <o-highlighted-image [image]="picture"></o-highlighted-image>
  <o-highlighted-header>
    <o-highlighted-title>Título de destacado</o-highlighted-title>
  </o-highlighted-header>
  <o-highlighted-content>
    <o-highlighted-description>
      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni
      enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
      negritas ni enlaces</o-highlighted-description>
  </o-highlighted-content>
  <o-highlighted-footer>
    <o-button link="#" size="lg">Botón</o-button>
    <o-button link="#" size="lg" type="secondary">Botón</o-button>
  </o-highlighted-footer>
</o-highlighted>
`;
export const HIGHLIGHTED_SECTIONS_IMAGE_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public picture: MediaImage = {
    src: 'https://gcba.github.io/Obelisco/panel/destacado.jpeg',
    alt: 'descripción de imagen'
  };
}
`;
export const HIGHLIGHTED_SECTIONS_VIDEO = `
<o-highlighted type="grouping">
  <o-highlighted-video [video]="video"></o-highlighted-video>
  <o-highlighted-header>
    <o-highlighted-title>Título de destacado</o-highlighted-title>
  </o-highlighted-header>
  <o-highlighted-content>
    <o-highlighted-description>Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas
      ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
      contener negritas ni enlaces</o-highlighted-description>
  </o-highlighted-content>
  <o-highlighted-footer>
    <a class="external" href="#" target="_blank">Enlace externo</a>
  </o-highlighted-footer>
</o-highlighted>
`;
export const HIGHLIGHTED_SECTIONS_VIDEO_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public video: MediaVideo = {
    src: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.mp4',
    title: 'Buenos Aires se escribe en plural',
    track: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.vtt'
  };
`;

//HIGHLIGHTED EXAMPLES
export const HIGHLIGHTED_BANNER_IMAGE_HTML = `
<o-highlighted 
  [title]="title" 
  [description]="description" 
  [image]="picture">
  <o-button #children link="#" size="lg">Botón</o-button>
  <o-button #children link="#" size="lg" type="secondary">Botón</o-button>
</o-highlighted>
`;

export const HIGHLIGHTED_IMAGE_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public title: string = 'Título de destacado';

  public description: string = 'Este es el cuerpo de un destacado. Debe ser breve y conciso, 
  de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. 
  Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces';

  public picture: MediaImage = {
    src: 'https://gcba.github.io/Obelisco/panel/destacado.jpeg',
    alt: 'descripción de imagen'
  };
}
`;

export const HIGHLIGHTED_BANNER_VIDEO_HTML = `
<o-highlighted 
  [title]="title"
  [description]="description"
  [video]="video">
  <o-button #children link="#" size="lg">Botón</o-button>
</o-highlighted>

<o-highlighted
  [title]="title"
  [description]="description"
  [iframe]="iframe">
  <a #children class="external" href="#" target="_blank">Enlace externo</a>
</o-highlighted>
`;

export const HIGHLIGHTED_VIDEO_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public title: string = 'Título de destacado';

  public description: string = 'Este es el cuerpo de un destacado. Debe ser breve y conciso, 
  de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. 
  Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces';

  public video: MediaVideo = {
    src: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.mp4',
    title: 'Buenos Aires se escribe en plural',
    track: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.vtt'
  };

  public iframe: MediaIframe = {
    src: 'https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw',
    title: 'Buenos Aires se escribe en plural'
  };
}
`;

export const HIGHLIGHTED_BANNER_NO_MEDIA_HTML = `
<o-highlighted [title]="title" [description]="description">
  <o-button #children size="lg" type="secondary" link="#" download="" [hasIcon]="true">
    <span class="material-icons-round" aria-hidden="true">file_download</span>
    Descargar
  </o-button>
</o-highlighted>
`;

export const HIGHLIGHTED_BANNER_NO_MEDIA_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public title: string = 'Título de destacado';

  public description: string = 'Este es el cuerpo de un destacado. Debe ser breve y conciso, 
  de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. 
  Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces';
}
`;

export const HIGHLIGHTED_BANNER_BG_HTML = `
<o-highlighted 
  [title]="title" 
  [description]="description" 
  [image]="picture" 
  [isBgLight]="true">
  <o-access #children title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm"></o-access>
</o-highlighted>
`;

export const HIGHLIGHTED_GROUPING_IMAGE_HTML = `
<div class="container">
  <div class="card-deck max-cards-2">
    <o-highlighted type="grouping" [title]="title" [description]="description" [image]="picture">
      <o-button #children link="#" size="lg">Botón</o-button>
    </o-highlighted>
    <o-highlighted type="grouping" [title]="title" [description]="description" [image]="picture">
      <o-button #children size="lg" type="secondary" link="#" download="" [hasIcon]="true">
        <span class="material-icons-round" aria-hidden="true">file_download</span>
        Descargar
      </o-button>
    </o-highlighted>
  </div>
</div>
`;

export const HIGHLIGHTED_GROUPING_VIDEO_HTML = `
<div class="container">
  <div class="card-deck max-cards-2">
    <o-highlighted type="grouping" [title]="title" [description]="description" [video]="video">
      <a #children class="external" href="#" target="_blank">Enlace externo</a>
    </o-highlighted>
    <o-highlighted type="grouping" [title]="title" [description]="description" [iframe]="iframe">
      <a #children class="external" href="#" target="_blank">Enlace externo</a>
    </o-highlighted>
  </div>
</div>
`;

export const HIGHLIGHTED_GROUPING_NO_MEDIA_HTML = `
<div class="container">
  <div class="card-deck max-cards-2">
    <o-highlighted type="grouping" [title]="title" [description]="description">
      <o-access #children title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm"></o-access>
    </o-highlighted>
    <o-highlighted type="grouping" [title]="title" [description]="description">
      <o-access #children title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm"></o-access>
    </o-highlighted>
  </div>
</div>
`;

export const HIGHLIGHTED_LATERAL_HTML = `
<o-highlighted type="lateral" [title]="title" [description]="shortDescription">
  <o-button #children link="#" size="lg" [isExpandable]="true">Botón</o-button>
</o-highlighted>

<o-highlighted type="lateral" [title]="title" [description]="shortDescription">
  <o-button #children size="lg" type="secondary" link="#" download="" [hasIcon]="true">
    <span class="material-icons-round" aria-hidden="true">file_download</span>
    Descargar
  </o-button>
</o-highlighted>

<o-highlighted type="lateral" [title]="title" [description]="shortDescription">
  <a #children class="external" href="#" target="_blank">Enlace externo</a>
</o-highlighted>

<o-highlighted type="lateral" [title]="title" [description]="shortDescription">
  <o-access #children title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm"></o-access>
</o-highlighted>
`;
