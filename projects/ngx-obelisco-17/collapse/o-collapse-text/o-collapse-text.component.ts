import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-collapse-text',
  templateUrl: './o-collapse-text.component.html',
  styleUrls: ['./o-collapse-text.component.scss']
})
export class OCollapseTextComponent {
  constructor() {}
  @Input() public customClasses?: string;
}
