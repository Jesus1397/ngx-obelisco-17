import { DataSource } from '@gcba/ngx-obelisco/core/models';

export const DATEPICKER_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/datepicker/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/datepicker/examples'
  }
];

/* DATEPICKER-API */
export const DATEPICKER_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> isPopUp: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para determinar si el componente de datepicker se muestra como un modal emergente o no.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> firstDayOfWeek: number', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el primer día de la semana en el datepicker. 0 representa el domingo, 1 representa el lunes, y así sucesivamente.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> outsideDays: "visible" | "hidden" ', customClasses: '' },
    description: {
      data: 'Se utiliza para determinar si los días fuera del mes actual se deben mostrar o no.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> minDate: DatepickerDate', customClasses: '' },
    description: { data: 'Se utiliza para establecer la fecha mínima permitida en el datepicker.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> maxDate: DatepickerDate', customClasses: '' },
    description: { data: 'Se utiliza para establecer la fecha máxima permitida en el datepicker.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> startDate: DatepickerDate', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer la fecha de inicio predeterminada en el datepicker.',
      customClasses: ''
    }
  }
];

export const DATEPICKER_OUTPUT_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Output() <br/> dateSelected: EventEmitter<DatepickerDate>', customClasses: '' },
    description: {
      data: 'Se utiliza para emitir un evento cuando se selecciona una fecha en el datepicker.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Output() <br/> taskSelected: EventEmitter<DatePickerTask[]>', customClasses: '' },
    description: { data: 'Se utiliza para emitir las tareas de la fecha seleccionada.', customClasses: '' }
  }
];

export const DATEPICKERDATE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'year: number', customClasses: '' },
    description: { data: 'Se utiliza para almacenar el año de una fecha.', customClasses: '' }
  },
  {
    name: { data: 'month: number', customClasses: '' },
    description: {
      data: 'Se utiliza para almacenar el mes de una fecha. (1 = enero, 2 = febrero, ..., 12 = diciembre)',
      customClasses: ''
    }
  },
  {
    name: { data: 'day: number', customClasses: '' },
    description: { data: 'Se utiliza para almacenar el día de una fecha.', customClasses: '' }
  }
];

export const DATEPICKERTASK_SOURCE: DataSource[] = [
  {
    name: { data: 'id: string', customClasses: '' },
    description: { data: 'Se utiliza para almacenar el identificador de una tarea.', customClasses: '' }
  },
  {
    name: { data: 'date: DatepickerDate', customClasses: '' },
    description: { data: 'Se utiliza para almacenar la fecha de una tarea.', customClasses: '' }
  },
  {
    name: { data: 'task: DatePickerTask[]', customClasses: '' },
    description: { data: 'Se utiliza para almacenar las tareas asociadas a una fecha.', customClasses: '' }
  }
];

export const TASK_SOURCE: DataSource[] = [
  {
    name: { data: 'title: string', customClasses: '' },
    description: { data: 'Se utiliza para almacenar el título de una tarea.', customClasses: '' }
  },
  {
    name: { data: 'type: string', customClasses: '' },
    description: { data: 'Se utiliza para almacenar el tipo de una tarea.', customClasses: '' }
  }
];

export const NGBDATASTRUCT_DATA_INTERFACE = `
interface DatepickerDate {
  year: number;
  month: number;
  day: number;
}`;

export const DATEPICKERTASK_INTERFACE = `
interface DatePickerTask {
  id?: string;
  date?: DatepickerDate;
  task?: DatePickerTask[];
}`;

export const TASK_INTERFACE = `
interface DatePickerTask {
  title?: string;
  type?: string;
}
`;

/* BUTTON-EXAMPLES */
export const DATEPICKER_EXAMPLE = `
  <o-datepicker
    (dateSelected)="onDateSelected($event)"
    (taskSelected)="onTaskSelected($event)"
  ></o-datepicker>
`;

export const DATEPICKER_EXAMPLE_POPUP = `
  <o-datepicker
    [isPopUp]="true"
    (dateSelected)="onDateSelected($event)"
    (taskSelected)="onTaskSelected($event)"
  ></o-datepicker>
  `;

export const DATEPICKER_EXAMPLE_WEEK_FIRSTDAY = `
  <o-datepicker
    [firstDayOfWeek]="3"
    (dateSelected)="onDateSelected($event)"
    (taskSelected)="onTaskSelected($event)"
  ></o-datepicker>
`;

export const DATEPICKER_EXAMPLE_OTHERSDAY = `
  <o-datepicker
    outsideDays="visible"
    (dateSelected)="onDateSelected($event)"
    (taskSelected)="onTaskSelected($event)"
  ></o-datepicker>
`;
