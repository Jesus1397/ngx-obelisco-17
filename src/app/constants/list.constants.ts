import { Step } from '@gcba/ngx-obelisco/core/models';

import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';
import { DataSource } from '@gcba/ngx-obelisco/core/models';

const formattedExampleTsCode = (code: any) => `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public listStepItems: Step[] = ${codeFormattingArrayList(code)}
  ];
}`;

const LIST_ROUTE = 'list';
const LIST_STEP_ROUTE = 'list/list-step';

export const NAVIGATIONS_LIST = [
  {
    title: 'Api',
    route: '/components/list/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/list/examples'
  }
];

export const LIST_STEP = NAVIGATIONS_LIST.map((el) => {
  return {
    ...el,
    route: el.route.replace(LIST_ROUTE, LIST_STEP_ROUTE)
  };
});

export const LIST_STEP_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br /> steps: Step[]', customClasses: '' },
    description: { data: 'Se utiliza para proporcionar un arreglo de objetos "Step" al componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> isStepLight: boolean', customClasses: '' },
    description: { data: 'Se utiliza para indicar si el estilo de los pasos debe ser "light" o no.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> isStepNumber: boolean', customClasses: '' },
    description: { data: 'Se utiliza para determinar si se deben mostrar números en los pasos.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> size: Sizes', customClasses: '' },
    description: { data: 'Se utiliza para definir el tamaño de los pasos en el componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: ''
    }
  }
];

export const LIST_STEP_INTERFACE_STEP = `
interface Step {
  title: string;
  description: string | string[];
}`;

export const LIST_STEP_STEP_INTERFACE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'title: string', customClasses: '' },
    description: { data: 'Se utiliza para especificar el título del paso', customClasses: '' }
  },
  {
    name: { data: 'description: string', customClasses: '' },
    description: {
      data: 'Se utiliza para proporcionar la descripción del paso, que puede ser un texto o una lista de textos.',
      customClasses: ''
    }
  }
];

export const STEPS: Step[] = [
  {
    title: 'Instrucción 1',
    description:
      'En esta descripción de la instrucción 1 se muestran los detalles principales de las acciones que deberá tomar el usuario luego.'
  },
  {
    title: 'Instrucción 2',
    description:
      'En esta descripción de la instrucción 2 se muestran los detalles principales de las acciones que deberá tomar el usuario luego.'
  },
  {
    title: 'Instrucción 3',
    description:
      'En esta descripción de la instrucción 3 se muestran los detalles principales de las acciones que deberá tomar el usuario luego.'
  },
  {
    title: 'Instrucción 4',
    description:
      'En esta descripción de la instrucción 4 se muestran los detalles principales de las acciones que deberá tomar el usuario luego.'
  },
  {
    title: 'Instrucción 5',
    description:
      'En esta descripción de la instrucción 5 se muestran los detalles principales de las acciones que deberá tomar el usuario luego.'
  }
];

export const LIST_STEP_EXAMPLE_HTML = `
  <o-list-step [steps]="listStepItems"></o-list-step>
`;

export const LIST_STEP_LIGHT_EXAMPLE_HTML = `
  <o-list-step [steps]="listStepItems" [isStepLight]="true"></o-list-step>
`;

export const LIST_STEP_NUMBER_EXAMPLE_HTML = `
  <o-list-step [steps]="listStepItems" [isStepNumber]="true"></o-list-step>
`;

export const LIST_STEP_LG_EXAMPLE_HTML = `
  <o-list-step [steps]="listStepItems" size="lg"></o-list-step>
`;

export const LIST_STEP_SM_EXAMPLE_HTML = `
  <o-list-step [steps]="listStepItems" size="sm"></o-list-step>
`;

export const LIST_STEP_EXAMPLE_TS = formattedExampleTsCode(STEPS);
