import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-map-description',
  templateUrl: './o-map-description.component.html',
  styleUrls: ['./o-map-description.component.scss']
})
export class OMapDescriptionComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
