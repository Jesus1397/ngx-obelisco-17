import { Component } from '@angular/core';
import { STATUS_MESSAGE_LIST } from 'src/app/constants/status-message.constants';

@Component({
  selector: 'app-status-message-example',
  templateUrl: './status-message-example.component.html',
  styleUrls: ['./status-message-example.component.scss']
})
export class StatusMessageExampleComponent {
  public statusMessageList = STATUS_MESSAGE_LIST;
}
