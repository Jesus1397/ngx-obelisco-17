import { Component } from '@angular/core';
import {
  NAVIGATION_SIMPLE_TS_ARRAY,
  NAVIGATION_EXAMPLE_SIMPLE_TS,
  NAVIGATION_HORIZONTAL_EXAMPLE_SIMPLE_BORDER_HTML,
  NAVIGATION_HORIZONTAL_EXAMPLE_SIMPLE_HTML,
  NAVIGATION_EXAMPLE_SIMPLE_ICON_TS,
  NAVIGATION_HORIZONTAL_EXAMPLE_SIZES,
  NAVIGATION_SIMPLE_ICON_TS,
  NAVIGATION_SIZES_HTML,
  NAVIGATION_EXAMPLE_SIMPLE_SIZES_TS
} from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-navigation-horizontal-examples',
  templateUrl: './navigation-horizontal-examples.component.html',
  styleUrls: ['./navigation-horizontal-examples.component.scss']
})
export class NavigationHorizontalExamplesComponent {
  public navigationSimpleComponent = NAVIGATION_SIMPLE_TS_ARRAY;
  public navigationSizeComponent = NAVIGATION_SIZES_HTML;
  public NavigationSimpleIconComponent = NAVIGATION_SIMPLE_ICON_TS;

  public simpleHTML = NAVIGATION_HORIZONTAL_EXAMPLE_SIMPLE_HTML;
  public sizesHTML = NAVIGATION_HORIZONTAL_EXAMPLE_SIZES;
  public simpleBorderHTML = NAVIGATION_HORIZONTAL_EXAMPLE_SIMPLE_BORDER_HTML;
  public sizesTs = NAVIGATION_EXAMPLE_SIMPLE_SIZES_TS;
  public exampleTs = NAVIGATION_EXAMPLE_SIMPLE_TS;
  public exmapleTsIcon = NAVIGATION_EXAMPLE_SIMPLE_ICON_TS;
}
