import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { SearchbarItem } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-search',
  templateUrl: './o-search.component.html',
  styleUrls: ['./o-search.component.scss'],
})
export class OSearchComponent implements AfterViewInit {
  @Input() public searchbarItems!: SearchbarItem[];
  @Input() public maxLengthResults: number = 10;
  @Input() public placeholder: string = 'Buscar...';
  @Input() public type: string = '';
  @Input() public onSelectItem?: (item: SearchbarItem) => void;

  term = '';
  isHover = false;
  noResults = false;
  filteredResults: SearchbarItem[] = [];
  selectedIndex: number = 0;

  @ViewChild('inputElement') inputElement!: ElementRef;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  adjustResultsWidth() {
    const inputWidth =
      this.inputElement.nativeElement.getBoundingClientRect().width;
    const searchResults =
      this.elementRef.nativeElement.querySelector('.search-results');
    const noResults =
      this.elementRef.nativeElement.querySelector('.no-results');

    if (searchResults && noResults) {
      if (inputWidth > 0) {
        this.renderer.setStyle(searchResults, 'width', inputWidth + 'px');
        this.renderer.setStyle(noResults, 'width', inputWidth + 'px');
      }
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

  ngAfterViewInit() {
    this.adjustResultsWidth();
  }

  resetSearch() {
    this.term = '';
    this.isHover = false;
    this.noResults = false;
    this.filteredResults = [];
    this.selectedIndex = 0;
  }

  goTo(e: SearchbarItem) {
    if (this.onSelectItem) {
      this.onSelectItem(e);
    } else {
      this.router.navigate([e.route]);
    }
    this.resetSearch();
  }

  onEnter() {
    if (this.filteredResults.length > 0) {
      this.goTo(this.filteredResults[this.selectedIndex]);
    }
  }

  onUp() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.isHover = false;
    }
  }

  onDown() {
    if (this.selectedIndex < this.filteredResults.length - 1) {
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
}
