import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-collapse-input-title',
  templateUrl: './o-collapse-input-title.component.html',
  styleUrls: ['./o-collapse-input-title.component.scss']
})
export class OCollapseInputTitleComponent {
  constructor() {}
  @Input() public customClasses?: string;
}
