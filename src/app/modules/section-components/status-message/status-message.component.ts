import { Component } from '@angular/core';
import { STATUS_MESSAGE_NAVIGATION } from 'src/app/constants/status-message.constants';

@Component({
  selector: 'app-status-message',
  templateUrl: './status-message.component.html',
  styleUrls: ['./status-message.component.scss']
})
export class StatusMessageComponent {
  public navigation = STATUS_MESSAGE_NAVIGATION;
}
