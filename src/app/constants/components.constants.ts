export enum ComponentEnum {
  access = 'Accesos',
  accessSimple = 'Accesos',
  accessList = 'Lista de accesos',
  alert = 'Alerta',
  breadcrumb = 'Miga de pan',
  card = 'Tarjetas',
  footer = 'Footer',
  progressBar = 'Barra de progreso',
  collapse = 'Colapsable',
  map = 'Mapa',
  modal = 'Modal',
  pagination = 'Paginación',
  table = 'Tabla',
  navigation = 'Navegación horizontal',
  navigationHorizontal = 'Navegación horizontal',
  navigationVertical = 'Navegación vertical',
  tabs = 'Pestañas',
  gallery = 'Galería',
  panel = 'Panel',
  panelSmall = 'Panel Chico',
  stepsForm = 'Pasos de un formulario',
  dropdown = 'Desplegables de navegación',
  dropdownNavigation = 'Desplegables de navegación',
  dropdownSelection = 'Desplegables de selección',
  statusMessage = 'Mensaje de estado',
  spinner = 'Spinner',
  tooltip = 'Tooltip',
  navbar = 'Header',
  switch = 'Switch',
  list = 'Lista de pasos',
  listStep = 'Lista de pasos',
  banner = 'Banner',
  button = 'Botón',
  highlighted = 'Destacado',
  block = 'Bloque de trámite',
  search = 'Buscador',
  customContent = 'Contenido personalizable',
  defaultImage = 'Imagen por defecto',
  icon = 'Iconos',
  badge = 'Etiqueta',
  calendar = 'Calendario'
  // datePicker = 'Datepicker'
}

export const COMPONENTS_NAVIGATION = [
  {
    title: 'Accesos',
    image: { src: 'assets/component-cards/Accesos.svg' },
    route: '/components/access',
    children: [
      {
        title: 'Simple',
        route: '/components/access/access-simple'
      },
      {
        title: 'Lista de accesos',
        route: '/components/access/access-list'
      }
    ]
  },
  {
    title: 'Alerta',
    image: { src: 'assets/component-cards/Alerta.svg' },
    route: '/components/alert'
  },
  {
    title: 'Miga de pan',
    image: { src: 'assets/component-cards/MigasDePan.svg' },
    route: '/components/breadcrumb'
  },
  {
    title: 'Tarjetas',
    image: { src: 'assets/component-cards/Tarjetas.svg' },
    route: '/components/card'
  },
  {
    title: 'Footer',
    image: { src: 'assets/component-cards/Footer.svg' },
    route: '/components/footer'
  },
  {
    title: 'Banner',
    image: { src: 'assets/component-cards/banner.jpg' },
    route: '/components/banner'
  },
  {
    title: 'Barra de progreso',
    image: { src: 'assets/component-cards/BarraDeProgreso.svg' },
    route: '/components/progress-bar'
  },
  {
    title: 'Botón',
    image: { src: 'assets/component-cards/boton.jpg' },
    route: '/components/button'
  },
  {
    title: 'Colapsable',
    image: { src: 'assets/component-cards/Colapsables.svg' },
    route: '/components/collapse'
  },
  {
    title: 'Mapa',
    image: { src: 'assets/component-cards/mapa.jpg' },
    route: '/components/map'
  },
  {
    title: 'Modal',
    image: { src: 'assets/component-cards/Modal.svg' },
    route: '/components/modal'
  },
  {
    title: 'Paginación',
    image: { src: 'assets/component-cards/Paginado.svg' },
    route: '/components/pagination'
  },
  {
    title: 'Tabla',
    image: { src: 'assets/component-cards/Tabla.svg' },
    route: '/components/table'
  },
  {
    title: 'Galería',
    image: { src: 'assets/component-cards/Galeria.svg' },
    route: '/components/gallery'
  },
  {
    title: 'Navegación',
    route: '/components/navigation',
    image: { src: 'assets/component-cards/Navegacion.svg' },
    children: [
      {
        title: 'Horizontal',
        route: '/components/navigation/navigation-horizontal'
      },
      {
        title: 'Vertical',
        route: '/components/navigation/navigation-vertical'
      },
      {
        title: 'Pestañas',
        route: '/components/navigation/tabs'
      }
    ]
  },
  {
    title: 'Panel',
    image: { src: 'assets/component-cards/' },
    route: '/components/panel'
  },
  {
    title: 'Pasos de un formulario',
    image: { src: 'assets/component-cards/PasosDeUnFormulario.svg' },
    route: '/components/steps-form'
  },
  {
    title: 'Desplegables',
    image: { src: 'assets/component-cards/Desplegable.svg' },
    route: '/components/dropdown',
    children: [
      {
        title: 'De navegación',
        route: '/components/dropdown/dropdown-navigation'
      },
      {
        title: 'De selección',
        route: '/components/dropdown/dropdown-selection'
      }
    ]
  },
  {
    title: 'Mensaje de estado',
    image: { src: 'assets/component-cards/MensajeDeEstado.svg' },
    route: '/components/status-message'
  },
  {
    title: 'Spinner',
    image: { src: 'assets/component-cards/Spinner.svg' },
    route: '/components/spinner'
  },
  {
    title: 'Tooltip',
    image: { src: 'assets/component-cards/Tooltip.svg' },
    route: '/components/tooltip'
  },
  {
    title: 'Header',
    image: { src: 'assets/component-cards/header.jpg' },
    route: '/components/navbar'
  },
  {
    title: 'Switch',
    image: { src: 'assets/component-cards/Switch.svg' },
    route: '/components/switch'
  },
  {
    title: 'Listas',
    image: { src: 'assets/component-cards/BarraDeEstado.svg' },
    route: '/components/list',
    children: [
      {
        title: 'De pasos',
        route: '/components/list/step-list'
      }
    ]
  },
  {
    title: 'Destacado',
    image: { src: 'assets/component-cards/Panel.svg' },
    route: '/components/highlighted'
  },
  {
    title: 'Bloque de trámite',
    image: { src: 'assets/component-cards/bloque.jpg' },
    route: '/components/block'
  },
  {
    title: 'Buscador',
    image: { src: 'assets/component-cards/buscador.jpg' },
    route: '/components/search'
  },
  {
    title: 'Calendario',
    image: { src: 'assets/component-cards/Calendar.svg' },
    route: '/components/calendar'
  },
  {
    title: 'Etiqueta',
    image: { src: 'assets/component-cards/' },
    route: '/components/badge'
  }
  // {
  //   title: 'Datepicker',
  //   image: { src: 'assets/component-cards/' },
  //   route: '/components/datepicker'
  // }
];

export const OTHERS_NAVIGATION = [
  {
    title: 'Contenido personalizable',
    image: { src: 'assets/component-cards/' },
    route: '/components/custom-content'
  },
  {
    title: 'Imagen por defecto',
    image: { src: 'assets/component-cards/' },
    route: '/components/default-image'
  }
];

export const ICONS_NAVIGATION = [
  {
    title: 'Iconos',
    image: { src: 'assets/component-cards/' },
    route: '/components/icon'
  }
];

export const COLUMNS = [
  {
    key: 'name',
    value: 'Nombre',
    customClasses: 'tb-text'
  },
  {
    key: 'description',
    value: 'Descripción',
    customClasses: 'tb-text'
  }
];

export const SIZES = `
  type Sizes = "sm" | "md" | "lg";
`;

export const TYPES = `
  type Types = 'primary' | 'success' | 'danger' | 'info';
`;

COMPONENTS_NAVIGATION.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
