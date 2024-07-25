import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHighlightedContentComponent } from './o-highlighted-content.component';

describe('OHighlightedContentComponent', () => {
  let component: OHighlightedContentComponent;
  let fixture: ComponentFixture<OHighlightedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OHighlightedContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OHighlightedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
