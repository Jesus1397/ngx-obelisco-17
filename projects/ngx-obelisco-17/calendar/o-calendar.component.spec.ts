import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCalendarComponent } from './o-calendar.component';

describe('OCalendarComponent', () => {
  let component: OCalendarComponent;
  let fixture: ComponentFixture<OCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCalendarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
