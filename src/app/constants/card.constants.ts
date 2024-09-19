import { DataSource } from 'ngx-obelisco-17/core/models';

export const CARD_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/card/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/card/examples',
  },
];

//CARDS API
export const CARD_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> isHorizontal: boolean', customClasses: '' },
    description: {
      data: 'Indica si el componente tendrá una dirección horizontal. Por defecto es false.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isBordered: boolean', customClasses: '' },
    description: {
      data: 'Indica si el componente tendrá borde. Por defecto es false.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isThemeCard: boolean', customClasses: '' },
    description: {
      data: 'Indica si el componente es horizontal temática. Por defecto es false.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> title: string', customClasses: '' },
    description: {
      data: 'Establece el título de la tarjeta.',
      customClasses: '',
    },
  },
  {
    name: {
      data: '@Input() <br/> isTitleTruncate: boolean',
      customClasses: '',
    },
    description: {
      data: 'Indica si el titulo del componente se trunca cuando es extenso. Por defecto es false.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> description: string', customClasses: '' },
    description: {
      data: 'Define el contenido de texto principal de la tarjeta.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> link: string', customClasses: '' },
    description: {
      data: 'Establece un enlace URL para la tarjeta.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> route: string', customClasses: '' },
    description: {
      data: 'Especifica la ruta de navegación para la tarjeta.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> icon: string', customClasses: '' },
    description: {
      data: 'Define el ícono que se mostrará en la tarjeta.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> image: MediaImage', customClasses: '' },
    description: {
      data: 'Define la imagen principal de la tarjeta.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> headline: string', customClasses: '' },
    description: {
      data: 'Establece el titular del evento o componente.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> cardBadges: CardBadge[]', customClasses: '' },
    description: {
      data: 'Define las etiquetas del componente. Debe ser un arreglo de objetos CardBadge. Por defecto type es "secondary".',
      customClasses: '',
    },
  },
];

export const CARD_BADGES_INTERFACE = `
  interface CardBadge {
    text: string;
    type: BadgeTypes;
    link: string;
    route: string;
  }
`;

export const CARD_BADGE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'text: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el texto de la etiqueta.',
      customClasses: '',
    },
  },
  {
    name: { data: 'type: BadgeTypes', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el tipo de etiqueta.',
      customClasses: '',
    },
  },
  {
    name: { data: 'link: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir enlace o URL.',
      customClasses: '',
    },
  },
  {
    name: { data: 'route: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir una ruta de navegación interna.',
      customClasses: '',
    },
  },
];

export const MEDIAIMAGE_CARDS_INTERFACE = `
interface Media {
  src: string;
}

interface MediaImage extends Media {
  alt: string;
}
`;
export const MEDIAIMAGE_CARDS_DATA_SOURCE = [
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

export const CARD_SECTIONS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'o-card-header', customClasses: 'font-italic' },
    description: {
      data: 'Sección anclada a la parte superior del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-card-title', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-card-header, para establecer el título.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-card-headline', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-card-header, para establecer el titular.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-card-badges', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-card-header, para definir las etiquetas.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-card-content', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para establecer el contenido del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-card-description', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-card-content, para establecer el texto descriptivo.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-card-image', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para establecer la imagen del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-card-icon', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para establecer el ícono del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: 'o-card-footer', customClasses: 'font-italic' },
    description: {
      data: 'Sección anclada a la parte inferior del componente.',
      customClasses: '',
    },
  },
];

export const CARD_TITLE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> isTruncate: boolean', customClasses: '' },
    description: {
      data: 'Indica si el titulo del componente se trunca cuando es extenso. Por defecto es false.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> link: string', customClasses: '' },
    description: {
      data: 'Establece un enlace URL para la tarjeta.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> route: string', customClasses: '' },
    description: {
      data: 'Especifica la ruta interna de navegación para la tarjeta.',
      customClasses: '',
    },
  },
];

export const CARD_IMAGE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> image: MediaImage', customClasses: '' },
    description: {
      data: 'Define la imagen principal de la tarjeta.',
      customClasses: '',
    },
  },
];

export const CARD_SECTIONS_VERTICAL = `
<o-card [isBordered]="true">
  <o-card-header>
    <o-card-badges>
      <o-badge>Etiqueta 1</o-badge>
      <o-badge>Etiqueta 2</o-badge>
    </o-card-badges>
    <o-card-title route="/components" [isTruncate]="true">
      Título de la tarjeta Noticias truncado con texto extendido que supera
      las tres líneas de longitud.
    </o-card-title>
  </o-card-header>
  <o-card-image [image]="imageVertical"></o-card-image>
  <o-card-content>
    <o-card-description>Descripción de la tarjeta</o-card-description>
  </o-card-content>
  <o-card-footer><small>Fecha de publicación</small></o-card-footer>
</o-card>
`;

export const CARD_SECTIONS_VERTICAL_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public imageVertical: MediaImage = {
    src: 'https://gcba.github.io/Obelisco/panel/destacado.jpeg',
    alt: 'descripción de imagen'
  };
}
`;

export const CARD_SECTIONS_HORIZONTAL = `
<o-card [isHorizontal]="true" [isBordered]="true">
  <o-card-icon>
    <span class="material-symbols-rounded o-icon" aria-hidden="true">info</span>
  </o-card-icon>
  <o-card-header>
    <o-card-title route="/components">
      Título de la tarjeta con más de una línea
    </o-card-title>
  </o-card-header>
  <o-card-content>
    <o-card-description>Descripción de la tarjeta</o-card-description>
  </o-card-content>
</o-card>
`;

//CARD EXAMPLES
export const CARD_HORIZONTAL_IMAGE = {
  src: '/assets/cards/img-left.jpg',
  alt: 'descripción de imagen',
};

export const CARD_THEME_IMAGE = {
  src: '/assets/cards/home.svg',
  alt: 'descripción de imagen',
};

export const CARD_VERTICAL_IMAGE = {
  src: '/assets/cards/img-top.jpg',
  alt: 'descripción de imagen',
};

export const CARD_THEME_HTML = `
<o-card
  title="Título de la tarjeta con más de una línea"
  description="Descripción de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/home.svg',
    alt: 'descripción de imagen'
  }"
  [isThemeCard]="true"
></o-card>
`;

export const CARD_HORIZONTAL_ICON_HTML = `
<o-card
  title="Título de la tarjeta con más de una línea"
  description="Descripción de la tarjeta"
  route="/components"
  icon="bx bxs-info-circle"
  [isHorizontal]="true"
  [isBordered]="true"
></o-card>
<o-card
  title="Título de la tarjeta con más de una línea"
  description="Descripción de la tarjeta"
  route="/components"
  icon="info"
  [isHorizontal]="true"
></o-card>
`;

export const CARD_HORIZONTAL_IMAGE_HTML = `
<o-card
  title="Título de la tarjeta con más de una línea"
  description="Descripción de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/img-left.jpg',
    alt: 'descripción de imagen'
  }"
  [isHorizontal]="true"
  [isBordered]="true"
></o-card>
<o-card
  title="Título de la tarjeta con más de una línea"
  description="Descripción de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/img-left.jpg',
    alt: 'descripción de imagen'
  }"
  [isHorizontal]="true"
></o-card>
`;

export const CARD_HORIZONTAL_TEXT_HTML = `
<o-card
  title="Título de la tarjeta con más de una línea"
  description="Descripción de la tarjeta"
  route="/components"
  [isHorizontal]="true"
  [isBordered]="true"
></o-card>
<o-card
  title="Título de la tarjeta con más de una línea"
  description="Descripción de la tarjeta"
  route="/components"
  [isHorizontal]="true"
></o-card>
`;

export const CARD_VERTICAL_ICON_HTML = `
<o-card
  title="Título de la tarjeta"
  description="Descripción de la tarjeta"
  route="/components"
  icon="bx bxs-info-circle"
  [isBordered]="true"
></o-card>
<o-card
  title="Título de la tarjeta"
  description="Descripción de la tarjeta"
  route="/components"
  icon="info"
></o-card>
`;

export const CARD_VERTICAL_IMAGE_HTML = `
<o-card
  title="Título de la tarjeta"
  description="Descripción de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/img-top.jpg',
    alt: 'descripción de imagen'
  }"
  [isBordered]="true"
></o-card>
`;

export const CARD_NEWS_HTML = `
<o-card
  title="Título de la tarjeta"
  description="Descripción de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/img-top.jpg',
    alt: 'descripción de imagen'
  }"
  [cardBadges]="[{text: 'Etiqueta 1'}, {text: 'Etiqueta 2'}]"
  [isBordered]="true"
>
  <small #info>Fecha de publicación</small>
</o-card>
<o-card
  title="Título de la tarjeta"
  description="Descripción de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/img-top.jpg',
    alt: 'descripción de imagen'
  }"
  [cardBadges]="[{text: 'Etiqueta 1'}, {text: 'Etiqueta 2'}]"
  [isTitleTruncate]="true"
  [isBordered]="true"
>
  <small #info>Fecha de publicación</small>
</o-card>
`;

export const CARD_EVENT_HTML = `
<o-card
  title="Título de la tarjeta"
  description="Descripción de la tarjeta"
  route="/components"
  headline="sobrelinea"
  [isBordered]="true"
  [image]="{
    src: '/assets/cards/img-top.jpg',
    alt: 'descripción de imagen'
  }"
>
  <div class="pt-2" #info>
    <small><span class="material-symbols-rounded o-icon" aria-hidden="true">calendar_today</span> Lun 01/1</small>
    <small><span class="material-symbols-rounded o-icon" aria-hidden="true">watch_later</span> 17 | 18 | 19 hs</small>
  </div>
</o-card>
`;

export const CARD_LAYOUT_THREE = `
<div class="card-deck card-column max-cards-3">
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
</div>
`;

export const CARD_LAYOUT_TWO = `
<div class="card-deck card-column max-cards-2">
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
</div>
`;
