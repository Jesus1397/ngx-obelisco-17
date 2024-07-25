import { Component } from '@angular/core';
import {
  ALERT_DATA_SOURCE,
  ALERT_LIST_INTERFACE,
  ALERT_LIST_INTERFACE_DATA_SOURCE,
  ALERT_TYPES
} from 'src/app/constants/alert.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-alert-api',
  templateUrl: './alert-api.component.html',
  styleUrls: ['./alert-api.component.scss']
})
export class AlertApiComponent {
  constructor() {}
  public dataSource = ALERT_DATA_SOURCE;
  public columns = COLUMNS;
  public types = ALERT_TYPES;
  public listInterface = ALERT_LIST_INTERFACE;
  public listInterfaceData = ALERT_LIST_INTERFACE_DATA_SOURCE;
}
