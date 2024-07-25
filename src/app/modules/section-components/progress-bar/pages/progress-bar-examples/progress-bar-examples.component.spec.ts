import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarExamplesComponent } from './progress-bar-examples.component';

describe('ProgressBarExamplesComponent', () => {
  let component: ProgressBarExamplesComponent;
  let fixture: ComponentFixture<ProgressBarExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressBarExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
