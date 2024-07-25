import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  GALLERY_DATA_SOURCE,
  GALLERY_INTERFACE_IMAGE_ITEM,
  GALLERY_INTERFACE_DATA_SOURCE
} from 'src/app/constants/gallery.constans';

@Component({
  selector: 'app-gallery-api',
  templateUrl: './gallery-api.component.html',
  styleUrls: ['./gallery-api.component.scss']
})
export class GalleryApiComponent {
  public dataSourceGallery = GALLERY_DATA_SOURCE;
  public columnsGallery = COLUMNS;
  public exampleIterfaceImageItem = GALLERY_INTERFACE_IMAGE_ITEM;
  public dataSourceGalleryInterface = GALLERY_INTERFACE_DATA_SOURCE;
}
