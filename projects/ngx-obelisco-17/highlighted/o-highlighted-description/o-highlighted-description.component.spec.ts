import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHighlightedDescriptionComponent } from './o-highlighted-description.component';

describe('OHighlightedDescriptionComponent', () => {
  let component: OHighlightedDescriptionComponent;
  let fixture: ComponentFixture<OHighlightedDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OHighlightedDescriptionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OHighlightedDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
