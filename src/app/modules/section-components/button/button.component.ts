import { Component } from '@angular/core';
import { BUTTON_NAVIGATION } from 'src/app/constants/button.constants';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  public buttonNavigation = BUTTON_NAVIGATION;
}
