import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-card-footer',
  templateUrl: './o-card-footer.component.html',
  styleUrls: ['./o-card-footer.component.scss']
})
export class OCardFooterComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
