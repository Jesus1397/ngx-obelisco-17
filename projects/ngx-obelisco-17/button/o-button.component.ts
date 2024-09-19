import { Component, Input } from '@angular/core';
import { ButtonTypes, ButtonSizes } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-button',
  templateUrl: './o-button.component.html',
  styleUrls: ['./o-button.component.scss'],
})
export class OButtonComponent {
  @Input() public type: ButtonTypes = 'primary';
  @Input() public isOutline?: boolean = false;
  @Input() public size?: ButtonSizes = 'md';
  @Input() public isExpandable: boolean = false;
  @Input() public ariaLabel?: string;
  @Input() public customClasses: string = '';

  @Input() public route!: string;
  @Input() public link?: string;
  @Input() public target?: string;
  @Input() public download?: string;
  @Input() public rel?: string;

  @Input() public isDisabled?: boolean;
  @Input() public dataTarget?: string;
  @Input() public dataToggle?: string;
  @Input() public dataDismiss?: string;

  getClassNames(): string {
    const sizeClass = this.size !== 'md' ? ' btn-' + this.size : '';
    const outlineClass =
      this.size == 'xs'
        ? ''
        : this.isOutline
        ? ' btn-outline-' + this.type
        : ' btn-' + this.type;
    const expandableClass = this.isExpandable ? ' btn-block' : '';
    const customClass = this.customClasses ? ' ' + this.customClasses : '';
    return 'btn' + outlineClass + sizeClass + expandableClass + customClass;
  }
}
