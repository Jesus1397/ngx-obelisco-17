import { Component } from '@angular/core';
import { PANEL_NAVIGATION } from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  public navigation = PANEL_NAVIGATION;
}
