import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerApiComponent } from './spinner-api.component';

describe('SpinnerApiComponent', () => {
  let component: SpinnerApiComponent;
  let fixture: ComponentFixture<SpinnerApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
