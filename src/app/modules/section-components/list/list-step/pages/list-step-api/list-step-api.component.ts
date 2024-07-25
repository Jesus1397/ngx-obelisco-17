import { Component } from '@angular/core';
import { COLUMNS, SIZES } from 'src/app/constants/components.constants';
import {
  LIST_STEP_DATA_SOURCE,
  LIST_STEP_INTERFACE_STEP,
  LIST_STEP_STEP_INTERFACE_DATA_SOURCE
} from 'src/app/constants/list.constants';

@Component({
  selector: 'app-list-step-api',
  templateUrl: './list-step-api.component.html',
  styleUrls: ['./list-step-api.component.scss']
})
export class ListStepApiComponent {
  public dataSource = LIST_STEP_DATA_SOURCE;
  public columns = COLUMNS;
  public liststepInterfaceStep = LIST_STEP_INTERFACE_STEP;
  public liststepStepInterfaceStep = LIST_STEP_STEP_INTERFACE_DATA_SOURCE;
  public sizes = SIZES;
}
