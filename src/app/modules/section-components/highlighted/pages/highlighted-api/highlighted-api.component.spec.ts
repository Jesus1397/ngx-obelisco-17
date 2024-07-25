import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedApiComponent } from './highlighted-api.component';

describe('HighlightedApiComponent', () => {
  let component: HighlightedApiComponent;
  let fixture: ComponentFixture<HighlightedApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightedApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightedApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
