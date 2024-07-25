import { Component, Input } from '@angular/core';
import { ButtonTypes, Sizes } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-button',
  templateUrl: './o-button.component.html',
  styleUrls: ['./o-button.component.scss'],
})
export class OButtonComponent {
  @Input() public type: ButtonTypes = 'primary';
  @Input() public isOutline?: boolean = false;
  @Input() public size?: Sizes = 'md';
  @Input() public isExpandable: boolean = false;
  @Input() public hasIcon: boolean = false;
  @Input() public hasSpinner: boolean = false;
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

  getSpinnerType(): string {
    const spinnerTypeMappings = {
      primary: 'dark',
      link: 'info',
      danger: 'danger',
      success: 'success',
      secondary: 'secondary',
    };

    if (
      (this.type === 'secondary' ||
        this.type === 'danger' ||
        this.type === 'success') &&
      !this.isOutline
    ) {
      return 'light';
    }
    return spinnerTypeMappings[this.type];
  }

  getClassNames(): string {
    const sizeClass = this.size !== 'md' ? ' btn-' + this.size : '';
    const outlineClass = this.isOutline
      ? ' btn-outline-' + this.type
      : ' btn-' + this.type;
    const expandableClass = this.isExpandable ? ' btn-block' : '';
    const iconClass = this.hasIcon ? ' btn-icon' : '';
    const customClass = this.customClasses ? ' ' + this.customClasses : '';
    return (
      'btn' +
      outlineClass +
      sizeClass +
      expandableClass +
      iconClass +
      customClass
    );
  }
}
