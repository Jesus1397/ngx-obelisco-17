import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { MediaPanel, MediaSizes } from 'ngx-obelisco-17/core/models';
import { OCustomContentDirective } from 'ngx-obelisco-17/directives';

@Component({
  selector: 'o-panel-small',
  templateUrl: './o-panel-small.component.html',
  styleUrls: ['./o-panel-small.component.scss'],
})
export class OPanelSmallComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public image!: MediaPanel;
  @Input() public isBgWhite: boolean = false;
  @Input() public isBgLight: boolean = false;
  @Input() public isVertical: boolean = false;
  @Input() public customClasses: string = '';

  sizeToPx = (size: MediaSizes): number => {
    switch (size) {
      case 'lg':
        return 154;
      case 'md':
        return 104;
      case 'sm':
        return 104;
    }
  };

  @ContentChild(OCustomContentDirective, { static: true })
  oCustomContent?: OCustomContentDirective;
  @ContentChild('listLinkContent', { static: true })
  listLinkContent?: ElementRef<any>;
  @ContentChild('panelFooterContent', { static: true })
  panelFooterContent?: ElementRef<any>;
}
