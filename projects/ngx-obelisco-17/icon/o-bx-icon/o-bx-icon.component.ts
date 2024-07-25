import { AfterContentInit, Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'o-bx-icon',
  templateUrl: './o-bx-icon.component.html',
  styleUrls: ['./o-bx-icon.component.scss']
})
export class OBxIconComponent implements AfterContentInit {
  constructor(private el: ElementRef) {}
  @Input() public customClasses: string = '';

  public projectedContent: string = '';

  ngAfterContentInit() {
    this.projectedContent = this.el.nativeElement.innerText.trim();
  }

  getClassNames(): string {
    const customClass = this.customClasses ? ' ' + this.customClasses : '';
    return 'bx ' + this.projectedContent + customClass;
  }
}
