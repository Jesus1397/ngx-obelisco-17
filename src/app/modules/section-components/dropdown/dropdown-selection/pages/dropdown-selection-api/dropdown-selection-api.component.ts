import { Component } from '@angular/core';
import { COLUMNS, SIZES } from 'src/app/constants/components.constants';
import {
  DROPDOWN_SELECTION_DATA_SOURCE,
  DROPDOWN_SELECTION_DATA_SOURCE_INTERFACE,
  DROPDOWN_SELECTION_DATA_SOURCE_OUTPUT,
  DROPDOWN_SELECTION_INTERFACE
} from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-selection-api',
  templateUrl: './dropdown-selection-api.component.html',
  styleUrls: ['./dropdown-selection-api.component.scss']
})
export class DropdownSelectionApiComponent {
  public columns = COLUMNS;
  public dataSource = DROPDOWN_SELECTION_DATA_SOURCE;
  public dataSourceOutput = DROPDOWN_SELECTION_DATA_SOURCE_OUTPUT;
  public dropdownSelectionInterface = DROPDOWN_SELECTION_INTERFACE;
  public dataSourceInterface = DROPDOWN_SELECTION_DATA_SOURCE_INTERFACE;
  public sizes = SIZES;
}
