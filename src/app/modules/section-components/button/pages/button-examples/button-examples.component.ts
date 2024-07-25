import { Component } from '@angular/core';
import {
  BUTTON_EXAMPLE_BLOCK,
  BUTTON_EXAMPLE_ICON,
  BUTTON_EXAMPLE_SIZES,
  BUTTON_EXAMPLE_SPINNER,
  BUTTON_EXAMPLE_TYPES,
  BUTTON_EXAMPLE_TYPES_TS
} from 'src/app/constants/button.constants';

@Component({
  selector: 'app-button-examples',
  templateUrl: './button-examples.component.html',
  styleUrls: ['./button-examples.component.scss']
})
export class ButtonExamplesComponent {
  public buttonTypes = BUTTON_EXAMPLE_TYPES;
  public buttonTypesTs = BUTTON_EXAMPLE_TYPES_TS;
  public buttonSizes = BUTTON_EXAMPLE_SIZES;
  public buttonBlock = BUTTON_EXAMPLE_BLOCK;
  public buttonIcon = BUTTON_EXAMPLE_ICON;
  public buttonSpinner = BUTTON_EXAMPLE_SPINNER;
  public alert() {
    alert('Botón');
  }
}
