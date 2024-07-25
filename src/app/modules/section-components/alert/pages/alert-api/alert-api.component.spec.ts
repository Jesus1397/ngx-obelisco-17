import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertApiComponent } from './alert-api.component';

describe('AlertaApiComponent', () => {
  let component: AlertApiComponent;
  let fixture: ComponentFixture<AlertApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
