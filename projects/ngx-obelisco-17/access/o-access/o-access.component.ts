import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Sizes } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-access',
  templateUrl: './o-access.component.html',
  styleUrls: ['./o-access.component.scss', '../../scss/deck.scss']
})
export class OAccessComponent implements AfterViewInit {
  @Input() public icon!: string;
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public size: Sizes = 'md';
  @Input() public link!: string;
  @Input() public route!: string;
  @Input() public customClasses: string = '';

  @ViewChild('access') public access!: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    if (this.link) {
      this.renderer.setAttribute(this.access.nativeElement, 'href', this.link);
    }
  }
}
