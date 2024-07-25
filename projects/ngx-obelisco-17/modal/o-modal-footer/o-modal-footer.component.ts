import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-modal-footer',
  templateUrl: './o-modal-footer.component.html',
  styleUrls: ['./o-modal-footer.component.scss']
})
export class OModalFooterComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
