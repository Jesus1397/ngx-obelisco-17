import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-modal-header',
  templateUrl: './o-modal-header.component.html',
  styleUrls: ['./o-modal-header.component.scss']
})
export class OModalHeaderComponent {
  constructor() {}
  @Input() public isUnbordered: boolean = false;
  @Input() public customClasses: string = '';

  getClassNames(): string {
    const unborderedClass = this.isUnbordered ? ' unbordered' : '';
    const customClass = this.customClasses ? ' ' + this.customClasses : '';
    return unborderedClass + customClass;
  }
}
