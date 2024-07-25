import { Component, Input } from '@angular/core';
import { BadgeTypes } from '@gcba/ngx-obelisco-17/core/models';

@Component({
  selector: 'o-badge',
  templateUrl: './o-badge.component.html',
  styleUrls: ['./o-badge.component.scss'],
})
export class OBadgeComponent {
  @Input() public type?: BadgeTypes;
  @Input() public link?: string;
  @Input() public route?: string;
  @Input() public customClasses?: string;
  @Input() public text?: string;

  getBadgesClassNames(): string {
    const typeClass = this.type ? this.type : 'secondary';
    const customClass = this.customClasses ? ' ' + this.customClasses : '';
    return 'badge-' + typeClass + customClass;
  }
}
