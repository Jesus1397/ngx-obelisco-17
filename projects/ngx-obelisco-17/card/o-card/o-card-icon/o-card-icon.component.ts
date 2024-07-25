import { Component, Input, Optional } from '@angular/core';
import { OCardComponent } from '../o-card.component';

@Component({
  selector: 'o-card-icon',
  templateUrl: './o-card-icon.component.html',
  styleUrls: ['./o-card-icon.component.scss']
})
export class OCardIconComponent {
  constructor(@Optional() private oCard: OCardComponent) {}
  @Input() public customClasses: string = '';

  getClassesCardIcon(): string {
    const customClass = this.customClasses ? this.customClasses : '';
    const positionClass = this.oCard?.isHorizontal ? ' card-icon-left ' : ' card-icon ';
    return positionClass + customClass;
  }
}
