import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedExamplesComponent } from './highlighted-examples.component';

describe('HighlightedExamplesComponent', () => {
  let component: HighlightedExamplesComponent;
  let fixture: ComponentFixture<HighlightedExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightedExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightedExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
