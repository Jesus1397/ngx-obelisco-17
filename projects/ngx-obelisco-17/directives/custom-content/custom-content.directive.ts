import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[oCustomContent]',
  standalone: true
})
export class OCustomContentDirective {
  constructor(public template: TemplateRef<any>) {}
}
