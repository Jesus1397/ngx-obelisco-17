import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-banner-actions',
  templateUrl: './o-banner-actions.component.html',
  styleUrls: ['./o-banner-actions.component.scss']
})
export class OBannerActionsComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
