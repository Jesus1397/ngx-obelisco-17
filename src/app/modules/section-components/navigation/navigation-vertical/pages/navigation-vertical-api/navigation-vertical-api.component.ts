import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  NAVIGATION_VERTICAL_DATA_SOURCE,
  NAVIGATION_VERTICAL_INTERFACE,
  NAVIGATION_VERTICAL_INTERFACE_DATA_SOURCE
} from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-navigation-vertical-api',
  templateUrl: './navigation-vertical-api.component.html',
  styleUrls: ['./navigation-vertical-api.component.scss']
})
export class NavigationVerticalApiComponent {
  public columns = COLUMNS;
  public dataSourceNavigationVertical = NAVIGATION_VERTICAL_DATA_SOURCE;
  public dataSourceInterface = NAVIGATION_VERTICAL_INTERFACE_DATA_SOURCE;
  public exampleIterface = NAVIGATION_VERTICAL_INTERFACE;
}
