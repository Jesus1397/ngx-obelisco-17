import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'o-pagination',
  templateUrl: './o-pagination.component.html',
  styleUrls: ['./o-pagination.component.scss']
})
export class OPaginationComponent implements OnInit {
  @Input() public totalPages!: number;
  @Input() public ariaLabel!: string;
  @Input() public currentPage: number = 1;
  @Input() public isDiscriptiveType: boolean = false;
  @Input() public customClasses: string = '';
  @Output() public currentPageChange: EventEmitter<number> = new EventEmitter<number>();

  public pagesArr: number[] = [];
  public isShowTopTrimmer = false;
  public isShowBottomTrimmer = false;
  public pagesToShow: number[] = [];
  public lastIndex!: number;
  public isBlockEvent = false;

  get getIsFirstPage(): boolean {
    return this.currentPage === 0;
  }

  get getIsLastPage(): boolean {
    return this.currentPage === this.pagesArr.length - 1;
  }

  ngOnInit(): void {
    this.pagesArr = Array.from(Array(this.totalPages).keys());
    this.pagesToShow = this.pagesArr;
    this.lastIndex = this.pagesArr.length - 1;
    this.isShowTopTrimmer = true;
    this.selectedPage(this.currentPage - 1);
  }

  public selectedPage(page: number): void {
    if (this.currentPage === page) return;
    this.currentPage = page;

    if (!this.isBlockEvent) {
      this.currentPageChange.emit(page + 1);
    }

    if (this.pagesArr.length > 2) {
      if (this.currentPage < 4) {
        this.lastIndex = this.pagesArr.length - 1;
        this.pagesToShow = [0, 1, 2, 3, 4];
        this.isShowTopTrimmer = true;
        this.isShowBottomTrimmer = false;
      } else if (this.currentPage > this.lastIndex - 4) {
        this.pagesToShow = this.pagesArr.slice(-5);
        this.isShowTopTrimmer = false;
        this.isShowBottomTrimmer = true;
      } else {
        this.pagesToShow = this.pagesArr.slice(this.currentPage - 1, this.currentPage + 2);
        this.isShowBottomTrimmer = true;
        this.isShowTopTrimmer = true;
      }
    }
  }

  public onPrev(): void {
    this.isBlockEvent = true;
    this.currentPageChange.emit(this.currentPage);
    if (this.currentPage > 0) this.selectedPage(this.currentPage - 1);
    this.isBlockEvent = false;
  }

  public onNext(): void {
    this.isBlockEvent = true;
    if (this.currentPage < this.pagesArr.length - 1) this.selectedPage(this.currentPage + 1);
    this.currentPageChange.emit(this.currentPage + 1);
    this.isBlockEvent = false;
  }
}
