import { Component } from '@angular/core';
import { MODAL_NAVIGATION } from 'src/app/constants/modal.constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public modal = MODAL_NAVIGATION;
}
