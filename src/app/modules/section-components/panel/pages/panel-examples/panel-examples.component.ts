import { Component } from '@angular/core';
import {
  PANEL_SMALL_HORIZONTAL,
  PANEL_SMALL_ITEMS_HORIZONTAL,
  PANEL_SMALL_ITEMS_VERTICAL,
  PANEL_SMALL_VERTICAL,
  PANEL_SMALL_WITH_BG,
  PANEL_IMAGE,
  PANEL_IMAGE_LARGE,
  PANEL_SMALL_TS,
  PANEL_SMALL_LARGE_IMAGE_TS
} from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-examples',
  templateUrl: './panel-examples.component.html',
  styleUrls: ['./panel-examples.component.scss']
})
export class PanelExamplesComponent {
  public exampleTs = PANEL_SMALL_TS;
  public exampleImageLargeTs = PANEL_SMALL_LARGE_IMAGE_TS;
  public horizontal = PANEL_SMALL_HORIZONTAL;
  public vertical = PANEL_SMALL_VERTICAL;
  public withBg = PANEL_SMALL_WITH_BG;
  public verticalItems = PANEL_SMALL_ITEMS_VERTICAL;
  public horizontalItems = PANEL_SMALL_ITEMS_HORIZONTAL;

  public image = PANEL_IMAGE;
  public imageLarge = PANEL_IMAGE_LARGE;
}
