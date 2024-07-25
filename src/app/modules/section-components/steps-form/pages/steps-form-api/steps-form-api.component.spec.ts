import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsFormApiComponent } from './steps-form-api.component';

describe('StepsFormApiComponent', () => {
  let component: StepsFormApiComponent;
  let fixture: ComponentFixture<StepsFormApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepsFormApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StepsFormApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
