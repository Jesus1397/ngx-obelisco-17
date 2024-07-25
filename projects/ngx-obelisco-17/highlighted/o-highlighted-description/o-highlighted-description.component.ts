import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-highlighted-description',
  templateUrl: './o-highlighted-description.component.html',
  styleUrls: ['./o-highlighted-description.component.scss']
})
export class OHighlightedDescriptionComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
