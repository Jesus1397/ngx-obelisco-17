import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStepApiComponent } from './list-step-api.component';

describe('ListStepApiComponent', () => {
  let component: ListStepApiComponent;
  let fixture: ComponentFixture<ListStepApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListStepApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListStepApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
