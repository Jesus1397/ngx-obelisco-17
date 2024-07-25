import { Component } from '@angular/core';
import {
  NAVIGATION_VERTICAL_EXAMPLE_HTML,
  NAVIGATION_VERTICAL_ICON_LV2_VIEWER,
  NAVIGATION_VERTICAL_EXAMPLE_ICON_LV3_TS,
  NAVIGATION_VERTICAL_EXAMPLE_LV2_ICON_TS,
  NAVIGATION_VERTICAL_EXAMPLE_LV2_TS,
  NAVIGATION_VERTICAL_LV2_VIEWER,
  NAVIGATION_VERTICAL_EXAMPLE_LV3_TS,
  NAVIGATION_VERTICAL_ICON_LV3_VIEWER,
  NAVIGATION_VERTICAL_LV3_VIEWER,
  NAVIGATION_SIMPLE_TS_ARRAY_VERTICAL,
  NAVIGATION_SIMPLE_ICON_TS_VERTICAL,
  NAVIGATION_EXAMPLE_VERTICAL_SIMPLE_TS,
  NAVIGATION_EXAMPLE_VERTICAL_SIMPLE_ICON_TS
} from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-navigation-vertical-examples',
  templateUrl: './navigation-vertical-examples.component.html',
  styleUrls: ['./navigation-vertical-examples.component.scss']
})
export class NavigationVerticalExamplesComponent {
  public navigationSimpleComponent = NAVIGATION_SIMPLE_TS_ARRAY_VERTICAL;
  public navigationSimpleIconComponent = NAVIGATION_SIMPLE_ICON_TS_VERTICAL;
  public levelTwoComponent = NAVIGATION_VERTICAL_LV2_VIEWER;
  public levelTwoIconComponent = NAVIGATION_VERTICAL_ICON_LV2_VIEWER;
  public levelThreeComponent = NAVIGATION_VERTICAL_LV3_VIEWER;
  public levelThreeIconComponent = NAVIGATION_VERTICAL_ICON_LV3_VIEWER;

  public simpleHTML = NAVIGATION_VERTICAL_EXAMPLE_HTML;
  public exampleTs = NAVIGATION_EXAMPLE_VERTICAL_SIMPLE_TS;
  public exampleTsIcon = NAVIGATION_EXAMPLE_VERTICAL_SIMPLE_ICON_TS;
  public exampleTsTwo = NAVIGATION_VERTICAL_EXAMPLE_LV2_TS;
  public exampleTsTwoIcon = NAVIGATION_VERTICAL_EXAMPLE_LV2_ICON_TS;
  public exampleTsThree = NAVIGATION_VERTICAL_EXAMPLE_LV3_TS;
  public exampleTsThreeIcon = NAVIGATION_VERTICAL_EXAMPLE_ICON_LV3_TS;
}
