import { CommonModule } from '@angular/common';
import {
  OnInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
  Renderer2,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Column, DataSource, TableCheckbox } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-table',
  templateUrl: './o-table.component.html',
  styleUrls: ['./o-table.component.scss'],
})
export class OTableComponent implements OnInit, AfterViewInit {
  public isValidateComponent: boolean = false;

  @Input() public id: string = 'o-table';
  @Input() public columns: Column[] = [];
  @Input() public dataSource: DataSource[] = [];
  @Input() public isBordered: boolean = false;
  @Input() public isStriped: boolean = false;
  @Input() public isScrollable: boolean = false;
  @Input() public customClasses: string = '';
  @Input() public checkbox!: TableCheckbox;

  @Output() public dataSelectedChange = new EventEmitter<DataSource[]>();

  private inputCheckArr: ElementRef[] = [];
  private dataSelected: DataSource[] = [];

  @ViewChildren('checkbox') public checkboxRef!: QueryList<ElementRef>;

  constructor(
    private readonly renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {}

  public ngOnInit(): void {
    this.componentValidations();
  }

  public ngAfterViewInit(): void {
    this.checkboxRef.map((e) => {
      this.inputCheckArr.push(e.nativeElement);
    });
  }

  private componentValidations(): void {
    this.isValidateComponent =
      this.columns.length > 0 && this.dataSource.length > 0;

    if (!this.isValidateComponent) {
      throw new Error('The columns and dataSource must not be empty');
    }

    this.columns.map((e) => {
      if (e.key === '' || e.value === '') {
        this.isValidateComponent = false;
        throw new Error('The columns must not have null values');
      }
    });

    this.columns.map((e) => (e.value = e.value.trim()));

    this.columns = this.columns.map((e) => {
      e.value =
        e.value.charAt(0).toUpperCase() + e.value.slice(1).toLowerCase();
      return e;
    });

    this.columns.map((e) => {
      if (
        e.value.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/) &&
        e.key.match(/^[a-zA-Z ]*$/)
      ) {
        this.isValidateComponent = true;
        return e;
      } else {
        this.isValidateComponent = false;
        throw new Error(
          'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
        );
      }
    });
  }

  sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public onHeaderCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const isChecked = target.checked;
      this.checkboxRef.toArray().forEach((checkbox: ElementRef) => {
        (checkbox.nativeElement as HTMLInputElement).checked = isChecked;
      });

      if (isChecked) {
        this.dataSelected = [...this.dataSource];
      } else {
        this.dataSelected = [];
      }

      this.dataSelectedChange.emit(this.dataSelected);
    }
  }

  public onCheckboxChange(data: DataSource, event: any): void {
    if (event && event.target && typeof event.target.checked === 'boolean') {
      const isChecked: boolean = event.target.checked;

      if (isChecked) {
        this.dataSelected.push(data);
      } else {
        const index = this.dataSelected.findIndex((item) => item === data);
        if (index !== -1) {
          this.dataSelected.splice(index, 1);
        }
      }

      this.dataSelectedChange.emit(this.dataSelected);
    }
  }
}
