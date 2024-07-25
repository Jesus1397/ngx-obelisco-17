import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { OCustomContentDirective } from 'ngx-obelisco-17/directives';
import { ModalSizes } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-modal',
  templateUrl: './o-modal.component.html',
  styleUrls: ['./o-modal.component.scss'],
})
export class OModalComponent {
  @Input() public dataTarget!: string;
  @Input() public title!: string;
  @Input() public subtitle!: string;
  @Input() public description!: string;
  @Input() public isHeaderUnbordered: boolean = false;
  @Input() public size: ModalSizes = 'sm';
  @Input() public isScrollable: boolean = false;
  @Input() public isOnTop: boolean = false;
  @Input() public customClasses: string = '';

  @ContentChild(OCustomContentDirective, { static: true })
  oCustomContent?: OCustomContentDirective;
  @ContentChild('children', { read: ElementRef }) children:
    | ElementRef
    | undefined;
}
