import { Component } from '@angular/core';
import {
  ACTIVEDAY_DATA_SOURCE,
  ACTIVEDAY_INTERFACE,
  ACTIVEDAY_TYPES,
  CALENDAR_DATA_SOURCE,
  CALENDAR_DATE_DATA_SOURCE,
  CALENDAR_DATE_INTERFACE
} from 'src/app/constants/calendar.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-calendar-api',
  templateUrl: './calendar-api.component.html',
  styleUrls: ['./calendar-api.component.scss']
})
export class CalendarApiComponent {
  public columns = COLUMNS;
  public dataSource = CALENDAR_DATA_SOURCE;
  public activedayInterface = ACTIVEDAY_INTERFACE;
  public calendarDateInterface = CALENDAR_DATE_INTERFACE;
  public activedayDataSource = ACTIVEDAY_DATA_SOURCE;
  public calendarDateDataSource = CALENDAR_DATE_DATA_SOURCE;
  public activedayTypes = ACTIVEDAY_TYPES;
}
