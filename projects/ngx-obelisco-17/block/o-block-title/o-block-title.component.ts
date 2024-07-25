import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-block-title',
  templateUrl: './o-block-title.component.html',
  styleUrls: ['./o-block-title.component.scss']
})
export class OBlockTitleComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
