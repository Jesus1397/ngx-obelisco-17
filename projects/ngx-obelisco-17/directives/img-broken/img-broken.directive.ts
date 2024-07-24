import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

const DEFAULT_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jomR9foeDrKFgdh_LNV4dCK14fY3DPk-0Q&usqp=CAU';

@Directive({
  selector: 'img[oDefaultImage]',
  standalone: true
})
export class ODefaultImageDirective {
  @Input() defaultImageUrl!: string;

  constructor(private readonly imgHost: ElementRef, private readonly renderer: Renderer2) {}

  @HostListener('error') public handleError(): void {
    const imageUrl = this.defaultImageUrl || DEFAULT_IMAGE;
    this.renderer.setAttribute(this.imgHost.nativeElement, 'src', imageUrl);
  }
}
