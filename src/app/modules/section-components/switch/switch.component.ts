import { Component } from '@angular/core';
import { SWITCH_NAVIGATION } from 'src/app/constants/switch.constants';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  public switchNavigation = SWITCH_NAVIGATION;
}
