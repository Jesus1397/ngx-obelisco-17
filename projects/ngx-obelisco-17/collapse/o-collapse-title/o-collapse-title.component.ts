import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-collapse-title',
  templateUrl: './o-collapse-title.component.html',
  styleUrls: ['./o-collapse-title.component.scss']
})
export class OCollapseTitleComponent {
  constructor() {}
  @Input() public customClasses?: string;
}
