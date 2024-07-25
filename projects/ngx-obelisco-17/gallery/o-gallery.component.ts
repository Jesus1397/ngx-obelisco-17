import { MediaGallery } from 'ngx-obelisco-17/core/models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-gallery',
  templateUrl: './o-gallery.component.html',
  styleUrls: ['./o-gallery.component.scss'],
})
export class OGalleryComponent {
  @Input() public galleryItems: MediaGallery[] = [];
  @Input() public isInteractive: boolean = false;
  @Input() public dataTarget!: string;
  @Input() public customClasses: string = '';
  @Input() public customClassesInteractive: string = '';
}
