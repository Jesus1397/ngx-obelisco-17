import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarExamplesComponent } from './calendar-examples.component';

describe('CalendarExamplesComponent', () => {
  let component: CalendarExamplesComponent;
  let fixture: ComponentFixture<CalendarExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
