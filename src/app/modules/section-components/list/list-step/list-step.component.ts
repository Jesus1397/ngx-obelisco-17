import { Component } from '@angular/core';
import { LIST_STEP } from 'src/app/constants/list.constants';

@Component({
  selector: 'app-list-step',
  templateUrl: './list-step.component.html',
  styleUrls: ['./list-step.component.scss']
})
export class ListStepComponent {
  public navigation = LIST_STEP;
}
