import { Component } from '@angular/core';
import {
  SWITCH_CHECKED,
  SWITCH_DARK,
  SWITCH_DEFAULT,
  SWITCH_DISABLED,
  SWITCH_SMALL,
  SWITCH_WITH_LABEL
} from 'src/app/constants/switch.constants';

@Component({
  selector: 'app-switch-examples',
  templateUrl: './switch-examples.component.html',
  styleUrls: ['./switch-examples.component.scss']
})
export class SwitchExamplesComponent {
  public exampleDefault = SWITCH_DEFAULT;
  public exampleWithLabel = SWITCH_WITH_LABEL;
  public exampleDark = SWITCH_DARK;
  public exampleSmall = SWITCH_SMALL;
  public exampleChecked = SWITCH_CHECKED;
  public exampleDisabled = SWITCH_DISABLED;
}
