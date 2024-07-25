import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-card-description',
  templateUrl: './o-card-description.component.html',
  styleUrls: ['./o-card-description.component.scss']
})
export class OCardDescriptionComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
