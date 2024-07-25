import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-modal-title',
  templateUrl: './o-modal-title.component.html',
  styleUrls: ['./o-modal-title.component.scss']
})
export class OModalTitleComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
