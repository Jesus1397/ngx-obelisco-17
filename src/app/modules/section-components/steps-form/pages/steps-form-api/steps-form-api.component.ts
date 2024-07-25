import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import { DATA_SOURCE_STEPS_FORM_INPUT, DATA_SOURCE_STEPS_FORM_OUTPUT } from 'src/app/constants/steps-form.constants';

@Component({
  selector: 'app-steps-form-api',
  templateUrl: './steps-form-api.component.html',
  styleUrls: ['./steps-form-api.component.scss']
})
export class StepsFormApiComponent {
  public columns = COLUMNS;
  public dataSourceInputs = DATA_SOURCE_STEPS_FORM_INPUT;
  public dataSourceOutput = DATA_SOURCE_STEPS_FORM_OUTPUT;
}
