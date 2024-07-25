import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  CollapseInputs,
  Collapse,
  CollapseItems,
} from 'ngx-obelisco-17/core/models';
import { OCustomContentDirective } from 'ngx-obelisco-17/directives';

@Component({
  selector: 'o-collapse',
  templateUrl: './o-collapse.component.html',
  styleUrls: ['./o-collapse.component.scss'],
})
export class OCollapseComponent implements OnChanges {
  @Input() public identifier: string = 'collapse';
  @Input() public dataParent!: string;
  @Input() public isWhite?: boolean = false;
  @Input() public customClasses?: string;

  @Input() public children?: CollapseItems[] | CollapseInputs[];
  @Input() public customClassesContent?: string;
  @Input() public content?: string | string[];
  @Input() public customClassesHeader?: string;
  @Input() public icon?: string;
  @Input() public label?: string;
  @Input() public title?: string;
  @Input() public isTitleAlone?: boolean;
  @Input() public subtitle?: string;

  isCollapsed = true;

  @Output() public selectedItemChange: EventEmitter<CollapseInputs> =
    new EventEmitter<CollapseInputs>();

  @ContentChild(OCustomContentDirective, { static: true })
  oCustomContent?: OCustomContentDirective;

  isTextArray(): boolean {
    return Array.isArray(this.content);
  }

  textArray(): string[] {
    const description = this.content!;
    return Array.isArray(description) ? description : [description];
  }

  public itemInputList: CollapseInputs[] = [];
  public itemInfoList: Collapse[] = [];

  ngOnChanges() {
    this.itemInputList = [];
    this.itemInfoList = [];

    if (this.children && this.children.length > 0) {
      let hasInputChild = false;
      for (const child of this.children) {
        if ('value' in child && child.value !== undefined) {
          this.itemInputList.push(child as CollapseInputs);
          hasInputChild = true;
        }
      }

      if (!hasInputChild) {
        for (const child of this.children) {
          this.itemInfoList.push(child as CollapseInputs);
        }
      }
    }
  }

  public toggleValue(child: CollapseInputs) {
    child.value = true;
    this.selectedItemChange.emit(child);
  }

  /* toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  } */
}
