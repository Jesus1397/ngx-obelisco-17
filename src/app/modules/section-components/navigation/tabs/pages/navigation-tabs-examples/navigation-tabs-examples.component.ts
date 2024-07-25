import { Component } from '@angular/core';
import { TabsProps } from 'ngx-obelisco-17/core/models';
import {
  NAVIGATION_TABS_EXAMPLE_SIMPLE_HTML,
  NAVIGATION_TABS_EXAMPLE_SIMPLE_ICON_HTML,
  NAVIGATION_TABS_EXAMPLE_SIMPLE_FIXEDWIDTH_HTML,
  NAVIGATION_TABS_EXAMPLE_SIMPLE_SLIDER_HTML,
  NAVIGATION_TABS_TS_ARRAY,
  NAVIGATION_TABS_TS_ARRAY_ICON,
  ExampleTsTabsSimple,
  ExampleTsTabsSimpleIcon,
  SIZES_TABS,
} from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-navigation-tabs-examples',
  templateUrl: './navigation-tabs-examples.component.html',
  styleUrls: ['./navigation-tabs-examples.component.scss'],
})
export class NavigationTabsExamplesComponent {
  public navigationTabsComponent = NAVIGATION_TABS_TS_ARRAY;
  public simpleIcon = NAVIGATION_TABS_TS_ARRAY_ICON;

  public simpleHTML = NAVIGATION_TABS_EXAMPLE_SIMPLE_HTML;
  public simpleHTMLIcon = NAVIGATION_TABS_EXAMPLE_SIMPLE_ICON_HTML;
  public simpleHTMLFixedWidth = NAVIGATION_TABS_EXAMPLE_SIMPLE_FIXEDWIDTH_HTML;
  public simpleHTMLSlider = NAVIGATION_TABS_EXAMPLE_SIMPLE_SLIDER_HTML;
  public sizesHTML = SIZES_TABS;
  public exampleTs = ExampleTsTabsSimple;
  public exmapleTsIcon = ExampleTsTabsSimpleIcon;

  public activeTab: TabsProps | undefined;
}
