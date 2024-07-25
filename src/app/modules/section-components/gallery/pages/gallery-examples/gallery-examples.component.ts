import { Component } from '@angular/core';
import {
  GALLERY_EXAMPLE_IMAGES_LIST_1_TS,
  GALLERY_EXAMPLE_IMAGES_LIST_2_TS,
  GALLERY_EXAMPLE_IMAGES_LIST_3_TS,
  GALLERY_EXAMPLE_IMAGES_LIST_4_TS,
  GALLERY_EXAMPLE_IMAGES_LIST_5_TS,
  GALLERY_EXAMPLE_IMAGES_LIST_6_TS,
  GALLERY_EXAMPLE_IMAGES_LIST_7_TS,
  GALLERY_EXAMPLE_IMAGES_LIST_HTML,
  GALLERY_EXAMPLE_INTERACTIVE_HTML,
  GALLERY_EXAMPLE_INTERACTIVE_TS,
  IMAGES_LIST_1,
  IMAGES_LIST_2,
  IMAGES_LIST_3,
  IMAGES_LIST_4,
  IMAGES_LIST_5,
  IMAGES_LIST_6,
  IMAGES_LIST_7
} from 'src/app/constants/gallery.constans';

@Component({
  selector: 'app-gallery-examples',
  templateUrl: './gallery-examples.component.html',
  styleUrls: ['./gallery-examples.component.scss']
})
export class GalleryExamplesComponent {
  public imagesListInteractive = IMAGES_LIST_3;
  public imagesList1 = IMAGES_LIST_1;
  public imagesList2 = IMAGES_LIST_2;
  public imagesList3 = IMAGES_LIST_3;
  public imagesList4 = IMAGES_LIST_4;
  public imagesList5 = IMAGES_LIST_5;
  public imagesList6 = IMAGES_LIST_6;
  public imagesList7 = IMAGES_LIST_7;
  public exampleInteractiveHTML = GALLERY_EXAMPLE_INTERACTIVE_HTML;
  public exampleInteractiveTS = GALLERY_EXAMPLE_INTERACTIVE_TS;
  public exampleImagesListHTML = GALLERY_EXAMPLE_IMAGES_LIST_HTML;
  public exampleImagesList1TS = GALLERY_EXAMPLE_IMAGES_LIST_1_TS;
  public exampleImagesList2TS = GALLERY_EXAMPLE_IMAGES_LIST_2_TS;
  public exampleImagesList3TS = GALLERY_EXAMPLE_IMAGES_LIST_3_TS;
  public exampleImagesList4TS = GALLERY_EXAMPLE_IMAGES_LIST_4_TS;
  public exampleImagesList5TS = GALLERY_EXAMPLE_IMAGES_LIST_5_TS;
  public exampleImagesList6TS = GALLERY_EXAMPLE_IMAGES_LIST_6_TS;
  public exampleImagesList7TS = GALLERY_EXAMPLE_IMAGES_LIST_7_TS;
}
