import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHighlightedImageComponent } from './o-highlighted-image.component';

describe('OHighlightedImageComponent', () => {
  let component: OHighlightedImageComponent;
  let fixture: ComponentFixture<OHighlightedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OHighlightedImageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OHighlightedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
