import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DropdownNavigationItem } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-dropdown-navigation',
  templateUrl: './o-dropdown-navigation.component.html',
  styleUrls: ['./o-dropdown-navigation.component.scss'],
})
export class ODropdownNavigationComponent implements OnChanges {
  @Input() public dataTarget: string = 'dropdown';
  @Input() public title!: string;
  @Input() public iconLeft!: string;
  @Input() public iconRight!: string;
  @Input() public isAnimatedIconLeft: boolean = false;
  @Input() public isAnimatedIconRight: boolean = false;
  @Input() public dropNavItems!: DropdownNavigationItem[];
  @Input() public isPositionRight: boolean = false;
  @Input() public isBordered: boolean = true;
  @Input() public customClasses: string = '';
  @Input() public ariaLabel!: string;

  hasChildren: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if ('dropNavItems' in changes) {
      this.hasChildren = this.dropNavItems.some(
        (item) => item.children && item.children.length > 0
      );
    }
  }
}
