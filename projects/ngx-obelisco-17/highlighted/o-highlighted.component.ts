import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import {
  HighlightedType,
  MediaIframe,
  MediaVideo,
  MediaImage,
} from 'ngx-obelisco-17/core/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OCustomContentDirective } from 'ngx-obelisco-17/directives';

@Component({
  selector: 'o-highlighted',
  templateUrl: './o-highlighted.component.html',
  styleUrls: ['./o-highlighted.component.scss'],
})
export class OHighlightedComponent {
  @Input() public isBgLight?: boolean = false;
  @Input() public type?: HighlightedType = 'banner';
  @Input() public customClasses: string = '';

  @Input() public title?: string;
  @Input() public description?: string;
  @Input() public image?: MediaImage;
  @Input() public video?: MediaVideo;
  @Input() public iframe?: MediaIframe;

  @ContentChild(OCustomContentDirective, { static: true })
  oCustomContent?: OCustomContentDirective;
  @ContentChild('children', { read: ElementRef }) children:
    | ElementRef
    | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
