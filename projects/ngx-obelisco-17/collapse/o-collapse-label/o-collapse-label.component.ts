import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-collapse-label',
  templateUrl: './o-collapse-label.component.html',
  styleUrls: ['./o-collapse-label.component.scss']
})
export class OCollapseLabelComponent {
  constructor() {}
  @Input() public customClasses?: string;
}
