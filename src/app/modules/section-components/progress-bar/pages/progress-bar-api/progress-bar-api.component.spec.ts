import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarApiComponent } from './progress-bar-api.component';

describe('ProgressBarApiComponent', () => {
  let component: ProgressBarApiComponent;
  let fixture: ComponentFixture<ProgressBarApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressBarApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
