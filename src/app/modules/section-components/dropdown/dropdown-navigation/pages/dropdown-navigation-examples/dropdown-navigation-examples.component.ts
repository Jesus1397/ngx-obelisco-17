import { Component } from '@angular/core';
import {
  DROPDOWN_NAVIGATION_EXAMPLE_ICONS_HTML,
  DROPDOWN_NAVIGATION_EXAMPLE_ALIGN_HTML,
  DROPDOWN_NAVIGATION_EXAMPLE_CASCADE_HTML,
  DROPDOWN_ITEMS_ICONS,
  DROPDOWN_ITEMS_LEFT,
  DROPDOWN_ITEMS_RIGHT,
  DROPDOWN_ITEMS_WITH_SUBITEMS,
  DROPDOWN_NAVIGATION_EXAMPLE_ALIGN_TS,
  DROPDOWN_NAVIGATION_EXAMPLE_CASCADE_TS,
  DROPDOWN_NAVIGATION_EXAMPLE_ICONS_TS
} from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-navigation-examples',
  templateUrl: './dropdown-navigation-examples.component.html',
  styleUrls: ['./dropdown-navigation-examples.component.scss']
})
export class DropdownNavigationExamplesComponent {
  public dropdownItemsIcons = DROPDOWN_ITEMS_ICONS;
  public dropdownItemsLeft = DROPDOWN_ITEMS_LEFT;
  public dropdownItemsRight = DROPDOWN_ITEMS_RIGHT;
  public dropdownItemsWithSubitems = DROPDOWN_ITEMS_WITH_SUBITEMS;

  public exampleIconsHTML = DROPDOWN_NAVIGATION_EXAMPLE_ICONS_HTML;
  public exampleAlignHTML = DROPDOWN_NAVIGATION_EXAMPLE_ALIGN_HTML;
  public exampleCascadeHTML = DROPDOWN_NAVIGATION_EXAMPLE_CASCADE_HTML;

  public exampleIconsTS = DROPDOWN_NAVIGATION_EXAMPLE_ICONS_TS;
  public exampleAlignTS = DROPDOWN_NAVIGATION_EXAMPLE_ALIGN_TS;
  public exampleCascadeTS = DROPDOWN_NAVIGATION_EXAMPLE_CASCADE_TS;
}
