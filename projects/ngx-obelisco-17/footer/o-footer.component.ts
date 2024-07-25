import { Component, ContentChild, Input } from '@angular/core';
import {
  CustomContent,
  Link,
  Network,
  Phone,
} from 'ngx-obelisco-17/core/models';
import { OCustomContentDirective } from 'ngx-obelisco-17/directives';

const PHONE_LIST = [
  {
    title: '102 - Niñez y Adolescencia',
    number: 102,
  },
  {
    title: '103 - Emergencias',
    number: 103,
  },
  {
    title: '107 - SAME',
    number: 107,
  },
  {
    title: '911 - Policía',
    number: 911,
  },
  {
    title: '144 - Violencia de género',
    number: 144,
  },
  {
    title: '147 - Atención ciudadana',
    number: 147,
  },
];

const NETWORK_LIST = [
  {
    title: 'Facebook',
    src: 'https://www.facebook.com/GCBA',
    icon: 'bx bxl-facebook-circle',
  },
  {
    title: 'Instagram',
    src: 'https://www.instagram.com/gcba/',
    icon: 'bx bxl-instagram-alt',
  },
  {
    title: 'Twitter',
    src: 'https://twitter.com/buenosaires',
    icon: 'bxl-twitter',
  },
  {
    title: 'YouTube',
    src: 'https://www.youtube.com/user/GCBA',
    icon: 'bxl-youtube',
  },
  {
    title: 'LinkedIn',
    src: 'https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires',
    icon: 'bx bxl-linkedin-square',
  },
  {
    title: 'TikTok',
    src: 'https://www.tiktok.com/@buenosaires',
    icon: 'bx bxl-tiktok',
  },
  {
    title: 'Pinterest',
    src: 'https://www.pinterest.es/buenosaires/',
    icon: 'bx bxl-pinterest',
  },
];

const LINK_LIST: Link[] = [
  {
    title: 'Boletín oficial',
    src: 'https://boletinoficial.buenosaires.gob.ar',
  },
  {
    title: 'Términos y condiciones',
    src: 'https://buenosaires.gob.ar/terminos-y-condiciones',
  },
  {
    title: 'Política de privacidad',
    src: 'https://buenosaires.gob.ar/privacidad',
  },
  {
    title: 'Oficios judiciales',
    src: 'https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales',
  },
  {
    title: 'Transparencia',
    src: 'https://buenosaires.gob.ar/gobierno/transparencia',
  },
];

@Component({
  selector: 'o-footer',
  templateUrl: './o-footer.component.html',
  styleUrls: ['./o-footer.component.scss'],
})
export class OFooterComponent {
  @Input() public phoneCustomItems: Phone[] = PHONE_LIST;
  @Input() public networkCustomItems: Network[] = NETWORK_LIST;
  @Input() public linkCustomItems: Link[] = LINK_LIST;

  @Input() public isPhoneSectionHidden: boolean = false;
  @Input() public isNetworkSectionHidden: boolean = false;
  @Input() public isLinkSectionHidden: boolean = false;

  @Input() public indicatorText!: string;

  @Input() public customClasses: string = '';
  @Input() public customClassesIndicator: string = '';

  @ContentChild(OCustomContentDirective, { static: true })
  oCustomContent?: OCustomContentDirective;
}
