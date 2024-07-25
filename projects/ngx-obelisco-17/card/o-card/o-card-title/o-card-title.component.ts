import { Component, Input, Optional } from '@angular/core';
import { OCardComponent } from '../o-card.component';

@Component({
  selector: 'o-card-title',
  templateUrl: './o-card-title.component.html',
  styleUrls: ['./o-card-title.component.scss']
})
export class OCardTitleComponent {
  constructor(@Optional() private oCard: OCardComponent) {}

  @Input() public isTruncate?: boolean = false;
  @Input() public link?: string;
  @Input() public route!: string;
  @Input() public customClasses: string = '';

  getClassesCardTitle(): string {
    let classes = this.isTruncate ? ' ellipsis-3' : '';
    if (this.oCard?.isBordered) {
      classes += ' card-title-link';
    }
    if (this.oCard?.isTitleTruncate) {
      classes += ' ellipsis-3';
    }
    return classes;
  }
}
