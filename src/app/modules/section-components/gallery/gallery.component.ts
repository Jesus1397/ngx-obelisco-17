import { Component } from '@angular/core';
import { GALLERY_NAVIGATION } from 'src/app/constants/gallery.constans';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public galleryNavigation = GALLERY_NAVIGATION;
}
