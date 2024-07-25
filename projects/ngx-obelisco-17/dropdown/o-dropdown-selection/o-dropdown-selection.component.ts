import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownSelectionItem, Sizes } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-dropdown-selection',
  templateUrl: './o-dropdown-selection.component.html',
  styleUrls: ['./o-dropdown-selection.component.scss'],
})
export class ODropdownSelectionComponent {
  @Input() public dataTarget: string = 'dropdown';
  @Input() public title!: string;
  @Input() public isSelectionMultiple: boolean = false;
  @Input() public iconLeft!: string;
  @Input() public iconRight!: string;
  @Input() public isAnimatedIconLeft: boolean = false;
  @Input() public isAnimatedIconRight: boolean = false;
  @Input() public dropSelectItems: DropdownSelectionItem[] = [];
  @Input() public isBordered: boolean = true;
  @Input() public size!: Sizes;
  @Input() public customClasses: string = '';
  @Input() public ariaLabel!: string;

  @Output() public selectedItemChange: EventEmitter<
    DropdownSelectionItem | DropdownSelectionItem[]
  > = new EventEmitter();

  public selectedItem!: DropdownSelectionItem;
  public selectedItems: DropdownSelectionItem[] = [];

  public selectedIndex!: number;
  public activeIndex!: number;
  public selectedCheckboxCount!: number;

  constructor() {
    this.selectedItem = {};
  }

  public onRadioSelectionChange(item: DropdownSelectionItem, index: number) {
    this.selectedItem = item;
    this.selectedItemChange.emit(item);
    this.selectedIndex = index + 1;
    this.activeIndex = index;
  }

  public onCheckboxSelectionChange(item: DropdownSelectionItem) {
    const itemIndex = this.selectedItems.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );

    if (itemIndex !== -1) {
      this.selectedItems.splice(itemIndex, 1);
    } else {
      this.selectedItems.push(item);
    }

    this.selectedCheckboxCount = this.selectedItems.length;
    this.selectedItemChange.emit(this.selectedItems);
  }
}
