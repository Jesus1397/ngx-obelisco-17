import { Component } from '@angular/core';
import { ALERT_NAVIGATION } from 'src/app/constants/alert.constants';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  constructor() {}

  public alertNavigation = ALERT_NAVIGATION;
}
