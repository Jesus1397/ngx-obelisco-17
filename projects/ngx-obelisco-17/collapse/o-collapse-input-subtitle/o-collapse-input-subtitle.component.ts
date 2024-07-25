import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-collapse-input-subtitle',
  templateUrl: './o-collapse-input-subtitle.component.html',
  styleUrls: ['./o-collapse-input-subtitle.component.scss']
})
export class OCollapseInputSubtitleComponent {
  constructor() {}
  @Input() public customClasses?: string;
}
