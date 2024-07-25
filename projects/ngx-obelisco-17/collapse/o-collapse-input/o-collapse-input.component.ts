import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-collapse-input',
  templateUrl: './o-collapse-input.component.html',
  styleUrls: ['./o-collapse-input.component.scss']
})
export class OCollapseInputComponent {
  constructor() {}
  @Input() public icon?: string;
  @Input() public name?: string;
  @Input() public id?: string;
  @Input() public value?: boolean;
  @Input() public customClasses?: string;
}
