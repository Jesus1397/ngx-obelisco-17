import { Component, ContentChild, Input } from '@angular/core';
import { StatusMessageTypes } from 'ngx-obelisco-17/core/models';
import { OCustomContentDirective } from 'ngx-obelisco-17/directives';

@Component({
  selector: 'o-status-message',
  templateUrl: './o-status-message.component.html',
  styleUrls: ['./o-status-message.component.scss'],
})
export class OStatusMessageComponent {
  @Input() public type: StatusMessageTypes = 'success';
  @Input() public title!: string;
  @Input() public content!: string | string[];
  @Input() public listContent: string[] = [];
  @Input() public customClasses: string = '';

  @ContentChild(OCustomContentDirective, { static: true })
  oCustomContent?: OCustomContentDirective;

  get isTextArray(): boolean {
    return Array.isArray(this.content);
  }

  get textArray(): string[] {
    return Array.isArray(this.content) ? this.content : [];
  }

  get isList(): boolean {
    return this.listContent.length > 0;
  }
}
