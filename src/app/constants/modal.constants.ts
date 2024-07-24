import { DataSource } from '@gcba/ngx-obelisco/core/models';

export const MODAL_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/modal/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/modal/examples'
  }
];
/* MODAL-API */
export const MODAL_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> dataTarget: string', customClasses: '' },
    description: { data: 'Se utiliza para identificar el componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> title: string', customClasses: '' },
    description: { data: 'Se utiliza para mostrar el título del componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> description: string', customClasses: '' },
    description: { data: 'Se utiliza para mostrar la descripción del componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> subtitle: string', customClasses: '' },
    description: { data: 'Se utiliza para mostrar el subtítulo del componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> isHeaderUnbordered: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para mostrar la linea divisora entre el encabezado y cuerpo del componente. Por defecto, es false.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> size: ModalSizes', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el tamaño del modal. Por defecto, es chico.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> isScrollable: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer si el modal es desplazable. Por defecto, es false.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> isOnTop: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer si el modal se muestra en la parte de arriba de la página. Por defecto, es false.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: ''
    }
  }
];

export const MODAL_SIZES = `
  type ModalSizes = "sm" | "md" | "lg" | "xl";
`;

export const MODAL_SECTIONS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'o-modal-header', customClasses: 'font-italic' },
    description: {
      data: 'Sección anclada a la parte superior del componente.',
      customClasses: ''
    }
  },
  {
    name: { data: 'o-modal-title', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza dentro de o-modal-header, para establecer el título del componente.',
      customClasses: ''
    }
  },
  {
    name: { data: 'o-modal-content', customClasses: 'font-italic' },
    description: {
      data: 'Se utiliza para establecer el contenido del componente.',
      customClasses: ''
    }
  },
  {
    name: { data: 'o-modal-footer', customClasses: 'font-italic' },
    description: {
      data: 'Sección anclada a la parte inferior del componente.',
      customClasses: ''
    }
  }
];

export const MODAL_SECTIONS = `
<o-button dataToggle="modal" dataTarget="exampleModal">Ver modal</o-button>
<o-modal dataTarget="exampleModal">
  <o-modal-header>
    <o-modal-title>¡Importante!</o-modal-title>
  </o-modal-header>
  <o-modal-content>
    <p>Antes de realizar la ficha de salud, tené en cuenta haber realizado los pasos previos correspondientes.</p>
  </o-modal-content>
  <o-modal-footer>
    <o-button type="link" dataDismiss="modal">Volver atrás</o-button>
    <o-button>Continuar</o-button>
  </o-modal-footer>
</o-modal>
`;

/* MODAL-EXAMPLES */
export const MODAL_EXAMPLE_CONFIRMATION_HTML = `
<o-button dataToggle="modal" dataTarget="exampleModal">Ver modal</o-button>
<o-modal
  dataTarget="exampleModal"
  title="¡Importante!"
  description="Antes de realizar la ficha de salud, 
  tené en cuenta haber realizado los pasos previos correspondientes."
>
  <o-button #children type="link" dataDismiss="modal">Volver atrás</o-button>
  <o-button #children>Continuar</o-button>
</o-modal>`;

export const MODAL_EXAMPLE_DANGER_HTML = `
<o-button dataToggle="modal" dataTarget="dangerModal">Ver modal</o-button>
<o-modal
  dataTarget="dangerModal"
  title="Eliminar documento"
  description="El documento que seleccionaste será eliminado."
>
  <o-button #children type="secondary" [isOutline]="true" dataDismiss="modal">
    Cancelar
  </o-button>
  <o-button #children type="danger">Eliminar</o-button>
</o-modal>`;

export const MODAL_EXAMPLE_RECOGNITION_HTML = `
<o-button dataToggle="modal" dataTarget="recognitionModal">Ver modal</o-button>
<o-modal
  dataTarget="recognitionModal"
  subtitle="CARGA EXITOSA"
  title="Los archivos se cargaron correctamente"
  [isHeaderUnbordered]="true"
>
  <o-button #children dataDismiss="modal">Aceptar</o-button>
</o-modal>`;
