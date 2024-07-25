import { DataSource } from '@gcba/ngx-obelisco-17/core/models';

export const PROGRESS_BAR_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/progress-bar/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/progress-bar/examples',
  },
];

export const PROGRESS_BAR_TYPES = `
  type ProgressBarTypes = 'info' | 'success';
`;

export const DATA_SOURCE_PROGRESS_BAR_INPUT: DataSource[] = [
  {
    name: { data: '@Input() <br /> isSteps: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para definir si mostrar el paso actual y el total de pasos o no. Por defecto es false.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> type: ProgressBarTypes', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el tipo de la barra de progreso.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> currentStep: number', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el paso actual.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> totalStep: number', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el total de pasos.',
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

export const DATA_SOURCE_PROGRESS_BAR_OUTPUT: DataSource[] = [
  {
    name: {
      data: '@Output() <br /> stopProgress: EventEmitter<boolean>',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para detener el proceso. <br/> Ocurrirá cuando se llegue al último paso y la barra de progreso se complete. <br/> El valor emitido será true.',
      customClasses: '',
    },
  },
];

export const PROGRESS_BAR_EXAMPLE_DIRECTIVE = `
<o-progress-bar type="info" description='Descripción' [currentStep]="4" [totalSteps]="8"></o-progress-bar>

<o-button oStepPrevious type="link" size="sm">Anterior</o-button>
<o-button oStepNext type="link" size="sm">Siguiente</o-button>
`;

export const PROGRESS_BAR_EXAMPLE_FUNCIONALITY_HTML = `
<o-progress-bar
  type="success"
  description='Descripción'
  [currentStep]="4"
  [totalSteps]="8"
  (stopSteps)="stopProgress($event)"
></o-progress-bar>

<o-button type="link" size="sm" (click)="previousStep()">Anterior</o-button>
<o-button type="link" size="sm" (click)="nextStep()">Siguiente</o-button>
`;

export const PROGRESS_BAR_EXAMPLE_FUNCIONALITY_TS = `
import { Component, OnInit } from '@angular/core';
import { StepService } from 'ngx-obelisco';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent implements OnInit {
  constructor(private readonly progressBarService: StepService) {}

  public ngOnInit(): void {
    this.progressBarService.initialize();
  }

  public nextStep(): void {
    this.progressBarService.next();
  }

  public previousStep(): void {
    this.progressBarService.previous();
  }

  public stopProgress(event: boolean): void {
    if (event) {
      console.log('Completado');
    }
  }
}
`;

export const PROGRESS_BAR_EXAMPLE_NO_STEPS = `
<o-progress-bar type="info" [currentStep]="5"></o-progress-bar>

<o-progress-bar type="success" [currentStep]="4"></o-progress-bar>
`;
