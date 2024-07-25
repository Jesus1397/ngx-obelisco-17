import {
  DataSource,
  TooltipDirections,
} from '@gcba/ngx-obelisco-17/core/models';

interface Tooltip {
  name: string;
  direction: TooltipDirections[];
  text: string;
  customClasses?: boolean;
  exampleHTML?: string;
  exampleTS?: string;
}

export const TOOLTIP_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/tooltip/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/tooltip/examples',
  },
];
export const DATA_SOURCE_TOOLTIP: DataSource[] = [
  {
    name: {
      data: '@Input() <br /> direction: TooltipDirections',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para definir la dirección del Tooltip.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> description: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el contenido.',
      customClasses: '',
    },
  },
  {
    name: {
      data: "@Input() <br /> trigger: 'mouseenter' | 'click'",
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para definir el evento activador del tooltip.',
      customClasses: '',
    },
  },
];

export const TOOLTIP_DIRECTIONS = `
type TooltipDirections =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';
`;

export const TOOLTIP_LIST: Tooltip[] = [
  {
    name: 'Arriba',
    direction: ['top-start', 'top', 'top-end'],
    text: 'Esta es la descripción de un tooltip.',
    exampleHTML: `
<o-button
  oTooltip
  [description]="text"
  direction="top-start"
  customClasses="mx-2"
>Top-start</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="top"
  customClasses="mx-2"
>Top</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="top-end"
  customClasses="mx-2"
>Top-end</o-button>
    `,
    exampleTS: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string = 'Esta es la descripción de un tooltip.';
}
    `,
  },
  {
    name: 'Derecha',
    direction: ['right-start', 'right', 'right-end'],
    text: 'Esta es la descripción de un tooltip.',
    exampleHTML: `
<o-button
  oTooltip
  [description]="text"
  direction="right-start"
  customClasses="mx-2"
>Right-start</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="right"
  customClasses="mx-2"
>Right</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="right-end"
  customClasses="mx-2"
>Right-end</o-button>
    `,
    exampleTS: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string = 'Esta es la descripción de un tooltip.';
}
    `,
  },
  {
    name: 'Izquierda',
    direction: ['left-start', 'left', 'left-end'],
    text: 'Esta es la descripción de un tooltip.',
    exampleHTML: `
<o-button
  oTooltip
  [description]="text"
  direction="left-start"
  customClasses="mx-2"
>Left-start</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="left"
  customClasses="mx-2"
>Left</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="left-end"
  customClasses="mx-2"
>Left-end</o-button>
    `,
    exampleTS: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string = 'Esta es la descripción de un tooltip.';
}
    `,
  },
  {
    name: 'Inferior',
    direction: ['bottom-start', 'bottom', 'bottom-end'],
    text: 'Esta es la descripción de un tooltip.',
    exampleHTML: `
<o-button
  oTooltip
  [description]="text"
  direction="bottom-start"
  customClasses="mx-2"
>Bottom-start</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="bottom"
  customClasses="mx-2"
>Bottom</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="bottom-end"
  customClasses="mx-2"
>Bottom-end</o-button>
    `,
    exampleTS: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string = 'Esta es la descripción de un tooltip.';
}
    `,
  },
  {
    name: 'Iconos',
    direction: ['left', 'top', 'right'],
    text: 'Esta es la descripción de un tooltip.',
    customClasses: true,
    exampleHTML: `
<span
  *ngIf="tooltip.classes"
  oTooltip
  [description]="text"
  direction="left"
  class="icon-box bg-light mx-2"
>
  <span class="material-icons-round" aria-hidden="true">help</span>
</span>

<span
  *ngIf="tooltip.classes"
  oTooltip
  [description]="text"
  direction="top"
  class="icon-box bg-light mx-2"
>
  <span class="material-icons-round" aria-hidden="true">help</span>
</span>

<span
  *ngIf="tooltip.classes"
  oTooltip
  [description]="text"
  direction="right"
  class="icon-box bg-light mx-2"
>
  <span class="material-icons-round" aria-hidden="true">help</span>
</span>
    `,
    exampleTS: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string = 'Esta es la descripción de un tooltip.';
}
    `,
  },
];
