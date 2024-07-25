import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSpinnerComponent } from './o-spinner.component';

describe('OSpinnerComponent', () => {
  let component: OSpinnerComponent;
  let fixture: ComponentFixture<OSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSpinnerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
