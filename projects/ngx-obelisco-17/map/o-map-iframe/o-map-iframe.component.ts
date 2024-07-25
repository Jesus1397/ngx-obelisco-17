import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MediaIframe } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-map-iframe',
  templateUrl: './o-map-iframe.component.html',
  styleUrls: ['./o-map-iframe.component.scss'],
})
export class OMapIframeComponent {
  constructor(private sanitizer: DomSanitizer) {}
  @Input() public iframe!: MediaIframe;
  @Input() public customClasses: string = '';

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
