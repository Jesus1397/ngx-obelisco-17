import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  MODAL_DATA_SOURCE,
  MODAL_SECTIONS,
  MODAL_SECTIONS_DATA_SOURCE,
  MODAL_SIZES
} from 'src/app/constants/modal.constants';

@Component({
  selector: 'app-modal-api',
  templateUrl: './modal-api.component.html',
  styleUrls: ['./modal-api.component.scss']
})
export class ModalApiComponent {
  public dataSource = MODAL_DATA_SOURCE;
  public columns = COLUMNS;
  public sizes = MODAL_SIZES;
  public dataSourceSections = MODAL_SECTIONS_DATA_SOURCE;
  public modalSectionsHtml = MODAL_SECTIONS;
}
