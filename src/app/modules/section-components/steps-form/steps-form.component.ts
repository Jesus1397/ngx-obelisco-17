import { Component } from '@angular/core';
import { STEPS_FORM_NAVIGATION } from 'src/app/constants/steps-form.constants';

@Component({
  selector: 'app-steps-form',
  templateUrl: './steps-form.component.html',
  styleUrls: ['./steps-form.component.scss']
})
export class StepsFormComponent {
  public navigation = STEPS_FORM_NAVIGATION;
}
