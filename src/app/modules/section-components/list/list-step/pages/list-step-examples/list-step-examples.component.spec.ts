import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStepExamplesComponent } from './list-step-examples.component';

describe('ListStepExamplesComponent', () => {
  let component: ListStepExamplesComponent;
  let fixture: ComponentFixture<ListStepExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListStepExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListStepExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
