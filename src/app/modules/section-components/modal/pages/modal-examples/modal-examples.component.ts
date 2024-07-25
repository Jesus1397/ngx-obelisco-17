import { Component } from '@angular/core';
import {
  MODAL_EXAMPLE_CONFIRMATION_HTML,
  MODAL_EXAMPLE_DANGER_HTML,
  MODAL_EXAMPLE_RECOGNITION_HTML
} from 'src/app/constants/modal.constants';

@Component({
  selector: 'app-modal-examples',
  templateUrl: './modal-examples.component.html',
  styleUrls: ['./modal-examples.component.scss']
})
export class ModalExamplesComponent {
  public exampleModalConfirmationHTML = MODAL_EXAMPLE_CONFIRMATION_HTML;
  public exampleModalDangerHTML = MODAL_EXAMPLE_DANGER_HTML;
  public exampleModalRecognitionHTML = MODAL_EXAMPLE_RECOGNITION_HTML;
}
