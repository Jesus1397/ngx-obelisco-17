import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-block-text',
  templateUrl: './o-block-text.component.html',
  styleUrls: ['./o-block-text.component.scss']
})
export class OBlockTextComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
