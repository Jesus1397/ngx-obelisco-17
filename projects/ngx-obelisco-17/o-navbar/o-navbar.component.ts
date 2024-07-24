import {
  LogoHeader,
  NavbarRoute,
  NavbarRouteAccount,
  NavbarRouteLogin,
  SearchbarItem,
} from '@gcba/ngx-obelisco/core/models';
import { OCustomContentDirective } from '@gcba/ngx-obelisco/directives';
import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'o-navbar',
  templateUrl: './o-navbar.component.html',
  styleUrls: ['./o-navbar.component.scss'],
})
export class ONavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  // Navbar
  @Input() public id: string = 'ONavbar';
  @Input() public logo: LogoHeader = {
    route: '/',
    img: [
      {
        src: 'https://buenosaires.gob.ar/assets/img/logos/LogoBA.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires - Inicio',
        customClasses: 'header-logo',
        height: 41,
        width: 76,
      },
    ],
  };
  @Input() public isRouteExact: boolean = false;
  @Input() public routes!: NavbarRoute[];
  @Input() public routesExtended!: NavbarRoute[];
  @Input() public routesAccount!: NavbarRouteAccount;
  @Input() public routesLogin!: NavbarRouteLogin;
  @Input() public idMain!: string;
  @Input() public customClasses: string = '';

  //Searchbar
  @Input() public searchbarItems!: SearchbarItem[];
  @Input() public maxLengthResults: number = 10;
  @Input() public placeholder: string = 'Buscar...';
  @ViewChild('navbarSearchResponsive', { static: false })
  navbarSearchResponsive!: ElementRef;
  @ViewChild('searchResults', { static: false }) searchResults!: ElementRef;
  @ViewChild('navbarContent') navbarContent!: ElementRef;

  term = '';
  isHover = false;
  noResults = false;
  filteredResults: SearchbarItem[] = [];
  selectedIndex: number = 0;
  isMenuExpanded: boolean = false;

  public loginClassMobile = { classMobile: '-mobile' };

  private clickOutsideListener = () => {};

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @ContentChild(OCustomContentDirective, { static: true })
  oCustomContent?: OCustomContentDirective;

  //Searchbar logic
  ngOnInit() {
    this.clickOutsideListener = this.renderer.listen(
      'document',
      'click',
      (event) => {
        if (!this.elementRef.nativeElement.contains(event.target)) {
          this.resetSearch();
        }
      }
    );
  }

  ngAfterViewInit() {
    if (this.navbarSearchResponsive) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const width = entry.contentRect.width - 2;
          if (this.searchResults) {
            this.renderer.setStyle(
              this.searchResults.nativeElement,
              'width',
              `${width}px`
            );
            this.renderer.setStyle(
              this.searchResults.nativeElement,
              'max-width',
              `${width}px`
            );
          }
        }
      });

      resizeObserver.observe(this.navbarSearchResponsive.nativeElement);
    }
  }

  search() {
    if (this.term === '') {
      this.resetSearch();
    } else {
      this.filteredResults = this.searchbarItems
        .filter((e) => e.title.toLowerCase().includes(this.term.toLowerCase()))
        .slice(0, this.maxLengthResults);
      this.noResults = this.filteredResults.length === 0;
    }
  }

  resetSearch() {
    this.term = '';
    this.isHover = false;
    this.noResults = false;
    this.filteredResults = [];
    this.selectedIndex = 0;
  }

  goTo(e: SearchbarItem) {
    this.router.navigate([e.route]);
    this.resetSearch();
    this.closeDropdownMenu();
  }

  onEnter() {
    if (this.filteredResults.length > 0) {
      this.goTo(this.filteredResults[this.selectedIndex]);
      this.closeDropdownMenu();
    }
  }

  onUp() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.isHover = false;
    }
  }

  onDown() {
    if (this.selectedIndex < this.filteredResults.length) {
      this.selectedIndex++;
      this.isHover = false;
    }
  }

  onMouseEnter() {
    this.isHover = true;
  }

  onMouseLeave() {
    this.isHover = false;
  }

  scrollToContent() {
    if (this.idMain) {
      const element = document.getElementById(this.idMain);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  ngOnDestroy() {
    if (this.clickOutsideListener) {
      this.clickOutsideListener();
    }
  }

  closeDropdownMenu() {
    if (this.navbarContent) {
      this.navbarContent.nativeElement.classList.remove('show');
      this.isMenuExpanded = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const backdrop = event.target as HTMLElement;
    if (backdrop && backdrop.classList.contains('header-backdrop')) {
      this.closeDropdownMenu();
    }
  }

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }
}
