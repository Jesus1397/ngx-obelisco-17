import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchApiComponent } from './switch-api.component';

describe('SwitchApiComponent', () => {
  let component: SwitchApiComponent;
  let fixture: ComponentFixture<SwitchApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
