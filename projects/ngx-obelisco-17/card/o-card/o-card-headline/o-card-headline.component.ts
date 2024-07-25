import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-card-headline',
  templateUrl: './o-card-headline.component.html',
  styleUrls: ['./o-card-headline.component.scss']
})
export class OCardHeadlineComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
