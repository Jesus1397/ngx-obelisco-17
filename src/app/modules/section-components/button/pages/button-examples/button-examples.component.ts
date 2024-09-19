import { Component } from '@angular/core';
import {
  BUTTON_BLOCK,
  BUTTON_ICON,
  BUTTON_SIZES,
  BUTTON_SPINNER,
  BUTTON_TYPES_BORDER,
  BUTTON_TYPES_LINK,
  BUTTON_TYPES_SOLID,
  BUTTON_TYPES_TS,
  BUTTON_SIZE_XS
} from 'src/app/constants/button.constants';

@Component({
  selector: 'app-button-examples',
  templateUrl: './button-examples.component.html',
  styleUrls: ['./button-examples.component.scss']
})
export class ButtonExamplesComponent {
  public buttonTypesSolid = BUTTON_TYPES_SOLID;
  public buttonTypesBorder = BUTTON_TYPES_BORDER;
  public buttonTypesLink = BUTTON_TYPES_LINK;
  public buttonTypesTs = BUTTON_TYPES_TS;
  public buttonSizes = BUTTON_SIZES;
  public buttonBlock = BUTTON_BLOCK;
  public buttonIcon = BUTTON_ICON;
  public buttonSpinner = BUTTON_SPINNER;
  public buttonSizeXs = BUTTON_SIZE_XS;
  public alert() {
    alert('Botón');
  }
}
