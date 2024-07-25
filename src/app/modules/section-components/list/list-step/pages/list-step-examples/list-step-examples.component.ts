import { Component } from '@angular/core';
import { Step } from 'ngx-obelisco-17/core/models';
import {
  LIST_STEP_EXAMPLE_HTML,
  LIST_STEP_EXAMPLE_TS,
  LIST_STEP_LG_EXAMPLE_HTML,
  LIST_STEP_LIGHT_EXAMPLE_HTML,
  LIST_STEP_NUMBER_EXAMPLE_HTML,
  LIST_STEP_SM_EXAMPLE_HTML,
  STEPS,
} from 'src/app/constants/list.constants';

@Component({
  selector: 'app-list-step-examples',
  templateUrl: './list-step-examples.component.html',
  styleUrls: ['./list-step-examples.component.scss'],
})
export class ListStepExamplesComponent {
  public steps: Step[] = STEPS;
  public liststepExampleHtml = LIST_STEP_EXAMPLE_HTML;
  public liststepLightExampleHtml = LIST_STEP_LIGHT_EXAMPLE_HTML;
  public liststepNumberExampleHtml = LIST_STEP_NUMBER_EXAMPLE_HTML;
  public liststepLgExampleHtml = LIST_STEP_LG_EXAMPLE_HTML;
  public liststepSmExampleHtml = LIST_STEP_SM_EXAMPLE_HTML;
  public liststepExampleTs = LIST_STEP_EXAMPLE_TS;
}
