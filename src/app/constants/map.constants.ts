import { DataSource } from '@gcba/ngx-obelisco-17/core/models';

import { MediaIframe } from '@gcba/ngx-obelisco-17/core/models';

export const MAP_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/map/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/map/examples',
  },
];
/* MAP EXAMPLES */

export const MAP_HTML = `
<o-map title="Ubicación" description="Uspallata 3160" [iframe]="iframe">
  <o-button
    [isExpandable]="true"
    link="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&lng=-58.407032&zl=15&modo=transporte&dir=Uspallata+3160"
    target="_blank"
    rel="noreferrer"
  >Cómo llego</o-button>
</o-map>
`;

export const MAP_INSTITUTIONAL_HTML = `
<o-map title="Ubicación" description="Uspallata 3160" [iframe]="iframe" type="institutional">
  <o-button
    [isExpandable]="true"
    link="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&lng=-58.407032&zl=15&modo=transporte&dir=Uspallata+3160"
    target="_blank"
    rel="noreferrer"
  >Cómo llego</o-button>
</o-map>
`;

export const MAP_IFRAME: MediaIframe = {
  src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar',
  title: 'Mapa de Buenos Aires',
};

export const MAP_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public iframe: MediaIframe = {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar',
    title: 'Mapa de Buenos Aires'
  };
}
`;

/* MAP API */
export const MAP_DATA_SOURCE: DataSource[] = [
  {
    name: { data: "@Input() <br/> type: 'lateral' | 'institutional'" },
    description: {
      data: "Propiedad que determina el tipo de encabezado a mostrar: 'lateral' para un h2 y 'institutional' para un h3.",
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
    description: { data: 'Define la dirección del mapa.', customClasses: '' },
  },
  {
    name: { data: '@Input() <br/> iframe: MediaIframe' },
    description: { data: 'Propiedad para agregar el iframe del mapa.' },
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: '',
    },
  },
];

export const MEDIAIFRAME_MAP_INTERFACE = `
interface Media {
  src: string;
}

interface MediaIframe extends Media {
  title: string;
}
`;

export const MEDIAIFRAME_MAP_DATA_SOURCE: DataSource[] = [
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

export const MAP_DATA_SOURCE_SECTIONS: DataSource[] = [
  {
    name: { data: 'o-map-header', customClasses: 'font-italic' },
    description: {
      data: 'Sección anclada a la parte superior del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-map-title', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-map-header, para establecer el título del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-map-description', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-map-header, para establecer el subtítulo del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-map-content', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para contener el iframe del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-map-iframe', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para establecer el iframe del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-map-footer', customClasses: 'font-italic' },
    description: {
      data: 'Sección anclada a la parte inferior del componente.',
      customClasses: '',
    },
  },
];

export const MAP_DATA_SOURCE_IFRAME: DataSource[] = [
  {
    name: { data: '@Input() <br/> iframe: MediaIframe' },
    description: { data: 'Propiedad para agregar el iframe del mapa.' },
  },
];

export const MAP_SECTIONS_HTML = `
<o-map type="institutional">
  <o-map-header>
    <o-map-title>Ubicación</o-map-title>
    <o-map-description>Uspallata 3160</o-map-description>
  </o-map-header>
  <o-map-content>
    <o-map-iframe [iframe]="iframe"></o-map-iframe>
  </o-map-content>
  <o-map-footer>
    <o-button
      target="_blank"
      rel="noreferrer"
      [isExpandable]="true"
      link="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&lng=-58.407032&zl=15&modo=transporte&dir=Uspallata+3160"
    >
      Cómo llego
    </o-button>
  </o-map-footer>
</o-map>
`;

export const MAP_SECTIONS_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public iframe: MediaIframe = {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar',
    title: 'Mapa de Buenos Aires'
  };
}
`;
