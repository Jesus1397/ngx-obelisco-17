import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseLabelComponent } from './o-collapse-label.component';

describe('OCollapseLabelComponent', () => {
  let component: OCollapseLabelComponent;
  let fixture: ComponentFixture<OCollapseLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseLabelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
