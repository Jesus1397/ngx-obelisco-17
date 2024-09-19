import { Component } from '@angular/core';
import {
  BUTTON_DATA_SOURCE,
  BUTTON_GENERAL_DATA_SOURCE,
  BUTTON_LINK_DATA_SOURCE,
  BUTTON_SIZES_TYPE,
  BUTTON_TYPES
} from 'src/app/constants/button.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-button-api',
  templateUrl: './button-api.component.html',
  styleUrls: ['./button-api.component.scss']
})
export class ButtonApiComponent {
  public columns = COLUMNS;
  public dataSource = BUTTON_GENERAL_DATA_SOURCE;
  public linkDataSource = BUTTON_LINK_DATA_SOURCE;
  public buttonDataSource = BUTTON_DATA_SOURCE;
  public types = BUTTON_TYPES;
  public sizes = BUTTON_SIZES_TYPE;
}
