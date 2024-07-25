import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-modal-content',
  templateUrl: './o-modal-content.component.html',
  styleUrls: ['./o-modal-content.component.scss']
})
export class OModalContentComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
