import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClipboard]',
  standalone: true
})
export class ClipboardDirective implements AfterViewInit {
  constructor(private readonly host: ElementRef, private readonly renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (navigator.clipboard) {
      const button = this.host.nativeElement.querySelector('button.btn-clipboard');
      if (button) {
        this.renderer.setProperty(button, 'innerHTML', `<i class='bx bxs-copy-alt'></i>`);
        this.renderer.setAttribute(button, 'aria-label', 'Copiar');
        this.renderer.setStyle(button, 'margin-bottom', '8px');
        this.renderer.listen(button, 'click', this.clipboard);
      }
    }
  }

  public clipboard(event: MouseEvent): void {
    const button = event.currentTarget as HTMLButtonElement;
    const pre = button?.parentElement;
    const code = pre?.querySelector('code');
    const text = code?.innerText;
    navigator.clipboard.writeText(text!);
    button.innerHTML = '<i class="bx bx-check"></i>';
    button.ariaLabel = 'Copiado';

    setTimeout(() => {
      button.innerHTML = '<i class="bx bxs-copy-alt"></i>';
      button.ariaLabel = 'Copiar';
    }, 1000);
  }
}
