import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OListStepComponent } from './o-list-step.component';

describe('OListStepComponent', () => {
  let component: OListStepComponent;
  let fixture: ComponentFixture<OListStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OListStepComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OListStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
