import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-highlighted-title',
  templateUrl: './o-highlighted-title.component.html',
  styleUrls: ['./o-highlighted-title.component.scss']
})
export class OHighlightedTitleComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
