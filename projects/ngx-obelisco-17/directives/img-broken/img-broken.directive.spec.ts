import { ElementRef, Renderer2 } from '@angular/core';
import { ODefaultImageDirective } from './img-broken.directive';

describe('ODefaultImageDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as ElementRef<any>;
    const mockRenderer = {} as Renderer2;
    const directive = new ODefaultImageDirective(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
