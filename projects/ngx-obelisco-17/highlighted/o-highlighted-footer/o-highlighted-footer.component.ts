import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-highlighted-footer',
  templateUrl: './o-highlighted-footer.component.html',
  styleUrls: ['./o-highlighted-footer.component.scss']
})
export class OHighlightedFooterComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
