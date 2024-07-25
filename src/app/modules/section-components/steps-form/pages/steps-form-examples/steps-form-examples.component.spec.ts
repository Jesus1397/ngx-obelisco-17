import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsFormExamplesComponent } from './steps-form-examples.component';

describe('StepsFormExamplesComponent', () => {
  let component: StepsFormExamplesComponent;
  let fixture: ComponentFixture<StepsFormExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepsFormExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StepsFormExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
