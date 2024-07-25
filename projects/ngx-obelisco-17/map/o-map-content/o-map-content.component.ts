import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-map-content',
  templateUrl: './o-map-content.component.html',
  styleUrls: ['./o-map-content.component.scss']
})
export class OMapContentComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
