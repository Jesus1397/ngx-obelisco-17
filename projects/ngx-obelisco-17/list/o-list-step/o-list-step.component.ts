import { Component, Input } from '@angular/core';
import { Sizes, Step } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-list-step',
  templateUrl: './o-list-step.component.html',
  styleUrls: ['./o-list-step.component.scss'],
})
export class OListStepComponent {
  @Input() public steps: Step[] = [];
  @Input() public isStepLight: boolean = false;
  @Input() public isStepNumber: boolean = false;
  @Input() public size!: Sizes;
  @Input() public customClasses: string = '';

  isTextArray(i: number): boolean {
    return Array.isArray(this.steps[i].description);
  }

  textArray(i: number): string[] {
    const description = this.steps[i].description;
    return Array.isArray(description) ? description : [description];
  }
}
