import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-banner-text',
  templateUrl: './o-banner-text.component.html',
  styleUrls: ['./o-banner-text.component.scss']
})
export class OBannerTextComponent {
  constructor() {}
  @Input() public text?: string;
  @Input() public customClasses: string = '';
}
