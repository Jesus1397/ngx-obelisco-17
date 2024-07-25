import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  DROPDOWN_NAVIGATION_DATA_SOURCE,
  DROPDOWN_NAVIGATION_DATA_SOURCE_INTERFACE,
  DROPDOWN_NAVIGATION_INTERFACE
} from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-navigation-api',
  templateUrl: './dropdown-navigation-api.component.html',
  styleUrls: ['./dropdown-navigation-api.component.scss']
})
export class DropdownNavigationApiComponent {
  public columns = COLUMNS;
  public dataSource = DROPDOWN_NAVIGATION_DATA_SOURCE;
  public dropdownNavigationInterace = DROPDOWN_NAVIGATION_INTERFACE;
  public dataSourceInterace = DROPDOWN_NAVIGATION_DATA_SOURCE_INTERFACE;
}
