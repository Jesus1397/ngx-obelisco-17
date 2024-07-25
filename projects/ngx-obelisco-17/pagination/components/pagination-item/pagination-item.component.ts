import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-pagination-item',
  templateUrl: './pagination-item.component.html',
  styleUrls: ['./pagination-item.component.scss']
})
export class PaginationItemComponent {
  @Input() public isActive!: boolean;
  @Input() public isDisabled!: boolean;
  @Input() public isNoEvent!: boolean;
}
