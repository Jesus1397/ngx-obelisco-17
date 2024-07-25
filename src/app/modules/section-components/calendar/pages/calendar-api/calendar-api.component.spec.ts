import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarApiComponent } from './calendar-api.component';

describe('CalendarApiComponent', () => {
  let component: CalendarApiComponent;
  let fixture: ComponentFixture<CalendarApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
