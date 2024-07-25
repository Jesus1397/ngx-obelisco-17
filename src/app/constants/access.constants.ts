import { AccessList, DataSource } from '@gcba/ngx-obelisco-17/core/models';

//Routes
const ACCESS_ROUTE = 'access';
const ACCESS_SIMPLE_ROUTE = 'access/access-simple';
const ACCESS_LIST_ROUTE = 'access/access-list';

export const ACCESS_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/access/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/access/examples',
  },
];

export const ACCESS_SIMPLE = ACCESS_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(ACCESS_ROUTE, ACCESS_SIMPLE_ROUTE),
  };
});

export const ACCESS_LIST = ACCESS_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(ACCESS_ROUTE, ACCESS_LIST_ROUTE),
  };
});

// ACCESS SIMPLE ------------------------------------------
export const ACCESS_SIMPLE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br /> icon: string', customClasses: '' },
    description: {
      data: 'Se utiliza para especificar el ícono que se mostrará en el componente.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br /> title: string', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el título o encabezado del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br />  description: string', customClasses: '' },
    description: {
      data: 'Se utiliza para proporcionar una descripción o texto descriptivo del componente.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br />  size: Sizes', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el tamaño del componente. Debe ser un valor de la enumeración "Sizes".',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br />  link: string', customClasses: '' },
    description: {
      data: 'Se utiliza para especificar un enlace o URL relacionado con el componente.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br />  route: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir una ruta de navegación interna asociada con el componente.',
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

export const ACCESS_SIZES_INTERFACE = `
 type Sizes = 'sm' | 'md' | 'lg';
`;

export const ACCESS_SIMPLE_TITLE_HTML = `
  <o-access title="Acceso"></o-access>
`;

export const ACCESS_SIMPLE_DESCRIPTION_HTML = `
  <o-access title="Acceso" description="Descripción (Opcional)"></o-access>
`;

export const ACCESS_SIMPLE_ICON_HTML = `
<o-access
  icon="bx bxs-info-circle"
  title="Acceso"
  description="Descripción (Opcional)"
  route="/home"
></o-access>
`;

export const ACCESS_SIMPLE_SIZES_HTML = `
<o-access
  title="Acceso"
  icon="bx bxs-info-circle"
  route="/home"
  description="Descripción (Opcional)"
></o-access>

<o-access
  title="Acceso"
  icon="bx bxs-info-circle"
  route="/home"
  description="Descripción (Opcional)"
  size="sm"
></o-access>
`;

export const ACCESS_LAYOUT_FOUR = `
<div class="access-deck access-column max-cards-4">
  <o-access title="Acceso" size="sm"></o-access>
  <o-access title="Acceso" size="sm"></o-access>
  <o-access title="Acceso" size="sm"></o-access>
  <o-access title="Acceso" size="sm"></o-access>
</div>
`;
export const ACCESS_LAYOUT_THREE = `
<div class="access-deck access-column max-cards-3">
  <o-access title="Acceso" size="sm"></o-access>
  <o-access title="Acceso" size="sm"></o-access>
  <o-access title="Acceso" size="sm"></o-access>
</div>
`;
export const ACCESS_LAYOUT_TWO = `
<div class="access-deck access-column max-cards-2">
  <o-access title="Acceso" size="sm"></o-access>
  <o-access title="Acceso" size="sm"></o-access>
</div>
`;
export const ACCESS_LAYOUT_ONE = `
<div class="access-deck max-cards-1">
  <o-access title="Acceso" size="sm"></o-access>
  <o-access title="Acceso" size="sm"></o-access>
  <o-access title="Acceso" size="sm"></o-access>
  <o-access title="Acceso" size="sm"></o-access>
</div>
`;

// ACCESS LIST ----------------------------------------------
export const ACCESS_LIST_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br /> items: AccessList', customClasses: '' },
    description: {
      data: 'Se utiliza para definir elementos del componente.',
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

export const ACCESS_LIST_INTERFACE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'header: AccessHeader', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'children: Access[] | AccessCategory[]', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'footer: AccessFootter', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
];

export const ACCESS_LIST_HEADER_INTERFACE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'title: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'description: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'icon: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'iconPositionLeft: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'iconText: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
];

export const ACCESS_LIST_ACCESS_INTERFACE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'title: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'description: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'icon: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'link: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'route: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
];

export const ACCESS_LIST_ACCESSCATEGORY_INTERFACE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'title: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'children: Access[]', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
];

export const ACCESS_LIST_FOOTER_INTERFACE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'title: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'icon: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'link: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
  {
    name: { data: 'route: string', customClasses: '' },
    description: { data: 'Se utiliza para definir', customClasses: '' },
  },
];

export const ACCESS_LIST_INTERFACE = `
interface AccessList {
  header?: AccessHeader;
  children?: Access[] | AccessCategory[];
  footer?: AccessFootter;
}
`;

export const ACCESS_LIST_HEADER_INTERFACE = `
interface AccessHeader {
  title?: string;
  description?: string;
  icon?: string;
  iconPositionLeft?: boolean;
  iconText?: string;
}
`;

export const ACCESS_LIST_ACCESS_INTERFACE = `
interface Access {
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
  route?: string;
}
`;

export const ACCESS_LIST_ACCESSCATEGORY_INTERFACE = `
interface AccessCategory {
  title?: string;
  children?: Access[];
}
`;

export const ACCESS_LIST_FOOTER_INTERFACE = `
interface AccessFootter {
  title?: string;
  icon?: string;
  link?: string;
  route?: string;
}
`;

export const ACCESS_LIST_EXAMPLE_HTML = `
  <o-access-list [items]="items"></o-access-list>
`;

export const ACCESS_LIST_ACCESS: AccessList = {
  header: {
    title: 'Título del acceso',
    description: 'Descripción del acceso',
    iconText: 'N°',
  },
  children: [
    {
      title: 'Acceso',
      description: 'Descripción (Opcional)',
      icon: 'bx bxs-tag-alt',
      route: '/home',
    },
    {
      title: 'Acceso',
      description: 'Descripción (Opcional)',
      icon: 'bx bxs-tag-alt',
      route: '/home',
    },
    {
      title: 'Acceso',
      description: 'Descripción (Opcional)',
      icon: 'bx bxs-tag-alt',
      route: '/home',
    },
  ],
  footer: {
    title: 'Acceso grande',
    icon: 'info',
    route: '/home',
  },
};

export const ACCESS_LIST_CATEGORY: AccessList = {
  header: {
    title: 'Título del acceso',
    description: 'Descripción del acceso',
    iconText: 'N°',
  },
  children: [
    {
      title: 'Categoría 1',
      children: [
        {
          title: 'Acceso',
          description: 'Descripción del acceso',
          icon: 'bx bxs-tag-alt',
          route: '/home',
        },
        {
          title: 'Acceso',
          description: 'Descripción del acceso',
          icon: 'bx bxs-tag-alt',
          route: '/home',
        },
      ],
    },
    {
      title: 'Categoría 2',
      children: [
        {
          title: 'Acceso',
          description: 'Descripción del acceso',
          icon: 'bx bxs-tag-alt',
          route: '/home',
        },
        {
          title: 'Acceso',
          description: 'Descripción del acceso',
          icon: 'bx bxs-tag-alt',
          route: '/home',
        },
      ],
    },
  ],
  footer: {
    title: 'Acceso grande',
    icon: 'info',
    route: '/home',
  },
};

export const ACCESS_LIST_FOOTER: AccessList = {
  header: {
    title: 'Título del acceso',
    description: 'Descripción del acceso',
    icon: 'info',
    iconPositionLeft: true,
  },
  footer: {
    title: 'Acceso grande',
    icon: 'info',
    route: '/home',
  },
};

export const ACCESS_LIST_EXAMPLE_TS = `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public items: AccessList = {
    header: {
      title: 'Título del acceso',
      description: 'Descripción del acceso',
      icon: 'info',
      iconPositionLeft: true
    },
    footer: {
      title: 'Acceso grande',
      icon: 'info',
      route: '/home'
    }
  };
}`;

export const ACCESS_LIST_EXAMPLE_ACCESS_TS = `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public items: AccessList = {
    header: {
      title: 'Título del acceso',
      description: 'Descripción del acceso',
      iconText: 'N°'
    },
    children: [
      {
        title: 'Acceso',
        description: 'Descripción (Opcional)',
        icon: 'bx bxs-tag-alt',
        route: '/home'
      },
      {
        title: 'Acceso',
        description: 'Descripción (Opcional)',
        icon: 'bx bxs-tag-alt',
        route: '/home'
      },
      {
        title: 'Acceso',
        description: 'Descripción (Opcional)',
        icon: 'bx bxs-tag-alt',
        route: '/home'
      }
    ],
    footer: {
      title: 'Acceso grande',
      icon: 'info',
      route: '/home'
    }
  };
}`;

export const ACCESS_LIST_EXAMPLE_CATEGORY_TS = `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public items: AccessList = {
    header: {
      title: 'Título del acceso',
      description: 'Descripción del acceso',
      iconText: 'N°'
    },
    children: [
      {
        title: 'Categoría 1',
        children: [
          {
            title: 'Acceso',
            description: 'Descripción del acceso',
            icon: 'bx bxs-tag-alt',
            route: '/home'
          },
          {
            title: 'Acceso',
            description: 'Descripción del acceso',
            icon: 'bx bxs-tag-alt',
            route: '/home'
          }
        ]
      },
      {
        title: 'Categoría 2',
        children: [
          {
            title: 'Acceso',
            description: 'Descripción del acceso',
            icon: 'bx bxs-tag-alt',
            route: '/home'
          },
          {
            title: 'Acceso',
            description: 'Descripción del acceso',
            icon: 'bx bxs-tag-alt',
            route: '/home'
          }
        ]
      }
    ],
    footer: {
      title: 'Acceso grande',
      icon: 'info',
      route: '/home'
    }
  };
}`;
