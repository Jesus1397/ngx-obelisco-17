import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-mat-icon',
  templateUrl: './o-mat-icon.component.html',
  styleUrls: ['./o-mat-icon.component.scss']
})
export class OMatIconComponent {
  constructor() {}
  @Input() public customClasses: string = '';
}
