import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-collapse-icon',
  templateUrl: './o-collapse-icon.component.html',
  styleUrls: ['./o-collapse-icon.component.scss']
})
export class OCollapseIconComponent {
  constructor() {}
  @Input() public customClasses?: string;
}
