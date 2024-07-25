import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OStepsFormComponent } from './o-steps-form.component';

describe('OStepsFormComponent', () => {
  let component: OStepsFormComponent;
  let fixture: ComponentFixture<OStepsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OStepsFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OStepsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
