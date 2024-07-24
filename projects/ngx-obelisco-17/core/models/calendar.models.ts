import { ActiveDayTypes } from './colors.models';

export interface ActiveDay {
  day?: number | number[];
  title?: string;
  url?: string;
  type?: ActiveDayTypes;
  isDisabled?: boolean;
}

export interface CalendarDate {
  month: number;
  year: number;
}
