import { Component } from '@angular/core';
import { COLUMNS, SIZES } from 'src/app/constants/components.constants';
import {
  NAVIGATION_HORIZONTAL_PROPS_DATA_SOURCE,
  NAVIGATION_TABS_DATA_SOURCE,
  TABS_INTERFACE
} from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-navigation-tabs-api',
  templateUrl: './navigation-tabs-api.component.html',
  styleUrls: ['./navigation-tabs-api.component.scss']
})
export class NavigationTabsApiComponent {
  public columns = COLUMNS;
  public dataSourceTabs = NAVIGATION_TABS_DATA_SOURCE;
  public dataSourceProps = NAVIGATION_HORIZONTAL_PROPS_DATA_SOURCE;
  public exampleIterface = TABS_INTERFACE;
  public sizes = SIZES;
}
