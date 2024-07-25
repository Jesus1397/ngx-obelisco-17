import { Component, Input, Optional } from '@angular/core';
import { OCardComponent } from '../o-card.component';
import { MediaImage } from '@gcba/ngx-obelisco-17/core/models';

@Component({
  selector: 'o-card-image',
  templateUrl: './o-card-image.component.html',
  styleUrls: ['./o-card-image.component.scss'],
})
export class OCardImageComponent {
  constructor(@Optional() private oCard: OCardComponent) {}

  @Input() public image?: MediaImage;
  @Input() public customClasses: string = '';

  getClassesCardImage(): string {
    const customClass = this.customClasses ? this.customClasses : '';
    const positionClass =
      this.oCard?.isHorizontal || this.oCard?.isThemeCard
        ? ' card-img-left '
        : ' card-img-top ';
    return positionClass + customClass;
  }
}
