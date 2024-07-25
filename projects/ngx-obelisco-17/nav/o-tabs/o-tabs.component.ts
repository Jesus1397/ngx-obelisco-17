import {
  Component,
  Input,
  ComponentRef,
  ViewContainerRef,
  Renderer2,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Sizes, TabsProps } from '@gcba/ngx-obelisco-17/core/models';

@Component({
  selector: 'o-tabs',
  templateUrl: './o-tabs.component.html',
  styleUrls: ['./o-tabs.component.scss'],
})
export class OTabsComponent implements AfterViewInit, OnDestroy {
  @Input() public navTabsItems: TabsProps[] = [];
  @Input() public isFixedWidth: boolean = false;
  @Input() public isItemsRounded: boolean = false;
  @Input() public isItemsRoundedLight: boolean = false;
  @Input() public size: Sizes = 'md';
  @Input() public isSlidered: boolean = false;
  @Input() public customClasses: string = '';

  @ViewChild('tabContentContainer', { read: ViewContainerRef })
  tabContentContainer!: ViewContainerRef;
  @ViewChild('tabsList') tabsListRef!: ElementRef;

  public activeTabComponentRef: ComponentRef<any> | null = null;
  public activeTabIndex: number | null = null;
  private isDragging = false;
  private dragStartPositionX = 0;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    const initialActiveTabIndex = this.navTabsItems.findIndex(
      (tab) => tab.isActive
    );
    if (initialActiveTabIndex !== -1) {
      this.activateTab(initialActiveTabIndex);
    }

    this.cdr.detectChanges();

    // Agregar event listeners a los botones de flecha
    const arrowIcons =
      this.tabsListRef.nativeElement.parentElement.querySelectorAll('.icon');
    if (arrowIcons.length >= 2) {
      arrowIcons[0].addEventListener('click', () =>
        this.handleArrowClick('left')
      );
      arrowIcons[1].addEventListener('click', () =>
        this.handleArrowClick('right')
      );
    }
  }

  handleArrowClick(direction: 'left' | 'right') {
    const movementX = direction === 'left' ? -340 : 340;
    const newScrollLeft = this.tabsListRef.nativeElement.scrollLeft + movementX;

    this.tabsListRef.nativeElement.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });

    this.handleIcons(newScrollLeft);
  }

  activateTab(tabIndex: number) {
    if (!this.navTabsItems[tabIndex].isDisabled) {
      if (this.activeTabIndex !== null) {
        this.navTabsItems[this.activeTabIndex].isActive = false;
      }

      this.activeTabIndex = tabIndex;
      this.navTabsItems[tabIndex].isActive = true;

      if (this.activeTabComponentRef) {
        this.activeTabComponentRef.destroy();
      }

      if (this.navTabsItems[tabIndex].child) {
        this.activeTabComponentRef = this.viewContainerRef.createComponent(
          this.navTabsItems[tabIndex].child
        );
      } else {
        this.activeTabComponentRef = null;
      }
    }
  }

  handleTabClick(tabIndex: number, event: MouseEvent) {
    this.activateTab(tabIndex);
  }

  handleTabKeyup(event: KeyboardEvent, tabIndex: number) {
    if (event.key === 'Enter') {
      this.activateTab(tabIndex);
    }
  }

  // Función para el evento 'mousedown'
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('material-icons-round')) {
      return;
    }

    this.isDragging = true;
    this.dragStartPositionX = event.clientX;
    this.renderer.addClass(this.tabsListRef.nativeElement, 'dragging');

    this.renderer.setStyle(
      this.tabsListRef.nativeElement,
      'cursor',
      'grabbing'
    );
    this.renderer.setStyle(document.body, 'user-select', 'none');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isDragging) {
      this.isDragging = false;
      this.renderer.removeClass(this.tabsListRef.nativeElement, 'dragging');
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const movementX = event.clientX - this.dragStartPositionX;
      this.dragStartPositionX = event.clientX;
      this.renderer.setProperty(
        this.tabsListRef.nativeElement,
        'scrollLeft',
        this.tabsListRef.nativeElement.scrollLeft - movementX
      );
      this.handleIcons(this.tabsListRef.nativeElement.scrollLeft);
      event.preventDefault();
    }
  }

  // Función para el evento 'mouseup'
  @HostListener('mouseup')
  onMouseUp() {
    this.isDragging = false;
    this.renderer.removeClass(this.tabsListRef.nativeElement, 'dragging');

    this.renderer.removeStyle(this.tabsListRef.nativeElement, 'cursor');
    this.renderer.removeStyle(document.body, 'user-select');
  }

  // Función para mostrar u ocultar las flechas de navegación
  private handleIcons(scrollVal: number) {
    const arrowIcons =
      this.tabsListRef.nativeElement.parentElement.querySelectorAll('.icon');
    const maxScrollableWidth =
      this.tabsListRef.nativeElement.scrollWidth -
      this.tabsListRef.nativeElement.clientWidth;

    if (arrowIcons[0]) {
      arrowIcons[0].style.display = scrollVal <= 0 ? 'none' : 'flex';
    }
    if (arrowIcons[1]) {
      arrowIcons[1].style.display =
        maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex';
    }
  }

  ngOnDestroy(): void {
    if (this.activeTabComponentRef) {
      this.activeTabComponentRef.destroy();
    }
  }
}
