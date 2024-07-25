import { Component } from '@angular/core';
import { CALENDAR_NAVIGATION } from 'src/app/constants/calendar.constants';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  public calendarNavigation = CALENDAR_NAVIGATION;
}
