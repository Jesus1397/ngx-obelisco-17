import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  DATA_SOURCE_PROGRESS_BAR_INPUT,
  DATA_SOURCE_PROGRESS_BAR_OUTPUT,
  PROGRESS_BAR_TYPES
} from 'src/app/constants/progress-bar.constants';

@Component({
  selector: 'app-progress-bar-api',
  templateUrl: './progress-bar-api.component.html',
  styleUrls: ['./progress-bar-api.component.scss']
})
export class ProgressBarApiComponent {
  public dataSourceProgressBarInput = DATA_SOURCE_PROGRESS_BAR_INPUT;
  public dataSourceProgressBarOutput = DATA_SOURCE_PROGRESS_BAR_OUTPUT;
  public columns = COLUMNS;
  public types = PROGRESS_BAR_TYPES;
}
