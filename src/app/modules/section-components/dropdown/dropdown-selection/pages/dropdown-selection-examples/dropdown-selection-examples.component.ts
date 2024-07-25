import { Component } from '@angular/core';
import {
  DROPDOWN_ITEMS_RADIO,
  DROPDOWN_ITEMS_CHECKBOX,
  DROPDOWN_SELECTION_EXAMPLE_CHECKBOX_HTML,
  DROPDOWN_SELECTION_EXAMPLE_RADIO_HTML,
  DROPDOWN_SELECTION_EXAMPLE_CHECKBOX_TS,
  DROPDOWN_SELECTION_EXAMPLE_RADIO_TS,
  DROPDOWN_SELECTION_EXAMPLE_SIZES_HTML
} from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-selection-examples',
  templateUrl: './dropdown-selection-examples.component.html',
  styleUrls: ['./dropdown-selection-examples.component.scss']
})
export class DropdownSelectionExamplesComponent {
  public dropdownItemsRadio = DROPDOWN_ITEMS_RADIO;
  public dropdownItemsCheckbox = DROPDOWN_ITEMS_CHECKBOX;

  public exampleRadioHTML = DROPDOWN_SELECTION_EXAMPLE_RADIO_HTML;
  public exampleCheckboxHTML = DROPDOWN_SELECTION_EXAMPLE_CHECKBOX_HTML;
  public exampleSizesHTML = DROPDOWN_SELECTION_EXAMPLE_SIZES_HTML;

  public exampleRadioTS = DROPDOWN_SELECTION_EXAMPLE_RADIO_TS;
  public exampleCheckboxTS = DROPDOWN_SELECTION_EXAMPLE_CHECKBOX_TS;
}
