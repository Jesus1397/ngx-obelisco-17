import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-card-badges',
  templateUrl: './o-card-badges.component.html',
  styleUrls: ['./o-card-badges.component.scss']
})
export class OCardBadgesComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
