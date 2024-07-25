import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-pagination-number',
  templateUrl: './pagination-number.component.html',
  styleUrls: ['./pagination-number.component.scss']
})
export class PaginationNumberComponent {
  @Input() public index!: number;
  @Input() public current!: number;
}
