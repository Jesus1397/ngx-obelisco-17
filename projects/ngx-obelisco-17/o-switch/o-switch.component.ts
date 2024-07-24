import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'o-switch',
  templateUrl: './o-switch.component.html',
  styleUrl: './o-switch.component.scss',
})
export class OSwitchComponent {
  @Input() public id?: string;
  @Input() public labelOn?: string;
  @Input() public labelOff?: string;
  @Input() public isDark?: boolean = false;
  @Input() public isDisabled?: boolean = false;
  @Input() public isSmall?: boolean = false;
  @Input() public isFixed?: boolean = false;
  @Input() public customClasses: string = '';
  @Input() public customClassesLabel: string = '';

  private _switchValue: boolean = false;

  @Input()
  public set switchValue(value: boolean) {
    this._switchValue = this.isFixed ? true : value;
  }

  public get switchValue(): boolean {
    return this._switchValue;
  }

  @Output() public switchValueChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public onSwitchChange(): void {
    if (this.isFixed) {
      return;
    }

    this.switchValue = !this.switchValue;
    this.switchValueChange.emit(this.switchValue);
  }
}
