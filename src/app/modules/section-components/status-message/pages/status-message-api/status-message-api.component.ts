import { Component } from '@angular/core';
import { COLUMNS, TYPES } from 'src/app/constants/components.constants';
import { DATA_SOURCE_STATUS_MESSAGE, STATUS_MESSAGE_TYPE } from 'src/app/constants/status-message.constants';

@Component({
  selector: 'app-status-message-api',
  templateUrl: './status-message-api.component.html',
  styleUrls: ['./status-message-api.component.scss']
})
export class StatusMessageApiComponent {
  public dataSource = DATA_SOURCE_STATUS_MESSAGE;
  public columns = COLUMNS;
  public type = STATUS_MESSAGE_TYPE;
}
