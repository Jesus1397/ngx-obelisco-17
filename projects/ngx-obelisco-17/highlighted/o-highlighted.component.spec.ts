import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHighlightedComponent } from './o-highlighted.component';

describe('OHighlightedComponent', () => {
  let component: OHighlightedComponent;
  let fixture: ComponentFixture<OHighlightedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OHighlightedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OHighlightedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
