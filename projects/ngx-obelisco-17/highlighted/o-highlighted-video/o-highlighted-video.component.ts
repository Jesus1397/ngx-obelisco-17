import { Component, Input } from '@angular/core';
import { MediaIframe, MediaVideo } from 'ngx-obelisco-17/core/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'o-highlighted-video',
  templateUrl: './o-highlighted-video.component.html',
  styleUrls: ['./o-highlighted-video.component.scss'],
})
export class OHighlightedVideoComponent {
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  @Input() public video?: MediaVideo;
  @Input() public iframe?: MediaIframe;
  @Input() public customClasses: string = '';
}
