import { CustomContent, DataSource } from '@gcba/ngx-obelisco/core/models';
import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

const formattedExampleTsCodeAll = (array1: any, array2: any, array3: any) => `
import { Component  } from '@angular/core';
import { Link, Network, Phone } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public phoneCustomItems: Phone[] = ${codeFormattingArrayList(array1)}
  ];

  public networkCustomItems: Network[] = ${codeFormattingArrayList(array2)}
  ];

  public linkCustomItems: Link[] = ${codeFormattingArrayList(array3)}
  ];
}`;

export const FOOTER_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/footer/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/footer/examples'
  }
];
export const FOOTER_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br /> phoneCustomItems: Phone[]', customClasses: '' },
    description: { data: 'Se utiliza para mostrar una lista personalizada de teléfonos.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> networkCustomItems: Network[]', customClasses: '' },
    description: { data: 'Se utiliza para mostrar una lista personalizada de redes.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> linkCustomItems: Link[]', customClasses: '' },
    description: { data: 'Se utiliza para mostrar una lista personalizada de enlaces.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> isPhoneSectionHidden: boolean', customClasses: '' },
    description: { data: 'Se utiliza para ocultar la sección de teléfonos.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> isNetworkSectionHidden: boolean', customClasses: '' },
    description: { data: 'Se utiliza para ocultar la sección de redes.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> isLinkSectionHidden: boolean', customClasses: '' },
    description: { data: 'Se utiliza para ocultar la sección de enlaces.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> indicatorText: string', customClasses: '' },
    description: { data: 'Se utiliza para ingresar el texto del indicador en la sección.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br /> customClassesIndicator: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al Indicador componente para personalizar su apariencia.',
      customClasses: ''
    }
  }
];

export const PHONE_CUSTOM_LIST = [
  {
    title: '101 - Numero Personalizado',
    number: 101
  },
  {
    title: '102 - Numero Personalizado',
    number: 102
  },
  {
    title: '103 - Numero Personalizado',
    number: 103
  }
];

export const NETWORK_CUSTOM_LIST = [
  {
    title: 'Red personalizada',
    src: 'https://www.google.com/',
    icon: 'bx bxs-info-circle'
  },
  {
    title: 'Red personalizada',
    src: 'https://www.instagram.com/',
    icon: 'bx bxs-info-circle'
  },
  {
    title: 'Red personalizada',
    src: 'https://youtube.com/',
    icon: 'bx bxs-info-circle'
  }
];

export const LINK_CUSTOM_LIST = [
  {
    title: 'Título Personalizado',
    src: 'https://buenosaires.gob.ar/inicio/'
  },
  {
    title: 'Título Personalizado',
    src: 'https://buenosaires.gob.ar/inicio/'
  },
  {
    title: 'Título Personalizado',
    src: 'https://buenosaires.gob.ar/inicio/'
  }
];

export const PHONE_CUSTOM_CONTENT: CustomContent = {
  title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  content: [
    "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ]
};

export const NETWORK_CUSTOM_CONTENT: CustomContent = {
  title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  content: [
    "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ]
};

export const LINK_CUSTOM_CONTENT: CustomContent = {
  title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  content: "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
};

export const FOOTER_INTERFACE_PHONE = `
interface Phone {
  title: string;
  number: string;
}
`;

export const FOOTER_INTERFACE_NETWORK = `
interface Network {
  title: string;
  src: string;
  icon: string;
}
`;

export const FOOTER_INTERFACE_LINK = `
interface Link {
  title: string;
  src: string;
}
`;

export const FOOTER_INTERFACE_PHONE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'title: string', customClasses: '' },
    description: { data: 'Se utiliza para definir el nombre.', customClasses: '' }
  },
  {
    name: { data: 'number: string', customClasses: '' },
    description: { data: 'Se utiliza para definir el número del telefono.', customClasses: '' }
  }
];

export const FOOTER_INTERFACE_NETWORK_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'title: string', customClasses: '' },
    description: { data: 'Se utiliza para definir el nombre de la red social.', customClasses: '' }
  },
  {
    name: { data: 'src: string', customClasses: '' },
    description: { data: 'Se utiliza para definir la url de la red social.', customClasses: '' }
  },
  {
    name: { data: 'icon: string', customClasses: '' },
    description: { data: 'Se utiliza para definir el icono de la red social.', customClasses: '' }
  }
];

export const FOOTER_INTERFACE_LINKS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'title: string', customClasses: '' },
    description: { data: 'Se utiliza para definir el nombre del enlace.', customClasses: '' }
  },
  {
    name: { data: 'src: string', customClasses: '' },
    description: { data: 'Se utiliza para definir la url del enlace.', customClasses: '' }
  }
];

export const FOOTER_EXAMPLE_LINKS_HTML = `
  <o-footer [isPhoneSectionHidden]="true" [isNetworkSectionHidden]="true"></o-footer>
`;

export const FOOTER_EXAMPLE_ALL_HTML = `
  <o-footer></o-footer>
`;

export const FOOTER_EXAMPLE_INDICATOR_HTML = `
<o-footer
  [isPhoneSectionHidden]="true"
  indicatorText="¿Te fue útil esta página?"
>
  <button class="btn btn-primary">Sí, me fue útil</button>
  <button class="btn btn-secondary">No me sirvió</button>
</o-footer>
`;

export const FOOTER_CUSTOM_LIST_HTML = `
<o-footer
  [phoneCustomItems]="phoneCustomItems"
  [networkCustomItems]="networkCustomItems"
  [linkCustomItems]="linkCustomItems"
></o-footer>
`;

export const FOOTER_CUSTOM_CONTENT_HTML = `
<o-footer
  [phoneCustomContent]="phoneCustomContent"
  [networkCustomContent]="networkCustomContent"
  [linkCustomContent]="linkCustomContent"
></o-footer>
`;

export const FOOTER_CUSTOM_LIST_TS = formattedExampleTsCodeAll(
  PHONE_CUSTOM_LIST,
  NETWORK_CUSTOM_LIST,
  LINK_CUSTOM_LIST
);

export const FOOTER_CUSTOM_CUSTOM_TS = `
import { Component  } from '@angular/core';
import { CustomContent } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public phoneCustomContent: CustomContent = {
    title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    content: [
      "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ]
  };

  public networkCustomContent: CustomContent = {
    title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    content: [
      "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ]
  };

  public linkCustomContent: CustomContent = {
    title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    content: "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };
}
`;
