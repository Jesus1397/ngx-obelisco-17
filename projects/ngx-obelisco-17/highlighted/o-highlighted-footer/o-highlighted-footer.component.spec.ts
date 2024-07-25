import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHighlightedFooterComponent } from './o-highlighted-footer.component';

describe('OHighlightedFooterComponent', () => {
  let component: OHighlightedFooterComponent;
  let fixture: ComponentFixture<OHighlightedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OHighlightedFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OHighlightedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
