import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHighlightedHeaderComponent } from './o-highlighted-header.component';

describe('OHighlightedHeaderComponent', () => {
  let component: OHighlightedHeaderComponent;
  let fixture: ComponentFixture<OHighlightedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OHighlightedHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OHighlightedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
