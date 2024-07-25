import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  PANEL_SMALL_DATA_SOURCE,
  MEDIA_SIZE_TYPES,
  MEDIAPANEL_INTERFACE,
  MEDIAPANEL_DATA_SOURCE
} from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-api',
  templateUrl: './panel-api.component.html',
  styleUrls: ['./panel-api.component.scss']
})
export class PanelApiComponent {
  public columns = COLUMNS;
  public dataSourcePanelSmall = PANEL_SMALL_DATA_SOURCE;
  public interface = MEDIAPANEL_INTERFACE;
  public dataSourceInterface = MEDIAPANEL_DATA_SOURCE;
  public mediaTypes = MEDIA_SIZE_TYPES;
}
