import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipApiComponent } from './tooltip-api.component';

describe('TooltipApiComponent', () => {
  let component: TooltipApiComponent;
  let fixture: ComponentFixture<TooltipApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TooltipApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
