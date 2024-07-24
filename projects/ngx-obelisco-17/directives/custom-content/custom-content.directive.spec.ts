import { TemplateRef } from '@angular/core';
import { OCustomContentDirective } from './custom-content.directive';

describe('OCustomContentDirective', () => {
  it('should create an instance', () => {
    const mockTemplateRef: TemplateRef<any> = {} as TemplateRef<any>;
    const directive = new OCustomContentDirective(mockTemplateRef);
    expect(directive).toBeTruthy();
  });
});
