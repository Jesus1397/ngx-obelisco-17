import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-collapse-subtitle',
  templateUrl: './o-collapse-subtitle.component.html',
  styleUrls: ['./o-collapse-subtitle.component.scss']
})
export class OCollapseSubtitleComponent {
  constructor() {}
  @Input() public customClasses?: string;
}
