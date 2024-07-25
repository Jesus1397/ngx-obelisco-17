import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHighlightedTitleComponent } from './o-highlighted-title.component';

describe('OHighlightedTitleComponent', () => {
  let component: OHighlightedTitleComponent;
  let fixture: ComponentFixture<OHighlightedTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OHighlightedTitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OHighlightedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
