import { Component } from '@angular/core';
import {
  CALENDAR_NO_EVENTS_HTML,
  CALENDAR_DEFAULT,
  CALENDAR_DEFAULT_HTML,
  CALENDAR_DEFAULT_TS,
  CALENDAR_LINK,
  CALENDAR_LINK_HTML,
  CALENDAR_LINK_TS,
  CALENDAR_TWO_REFERENCES,
  CALENDAR_TWO_REFERENCES_HTML,
  CALENDAR_TWO_REFERENCES_TS,
  CALENDAR_COLLAPSE,
  CALENDAR_COLLAPSE_HTML,
  CALENDAR_COLLAPSE_TS,
  CALENDAR_CROMATIC_REF,
  CALENDAR_CROMATIC_REF_HTML,
  CALENDAR_CROMATIC_REF_TS,
  CALENDAR_DECK,
  CALENDAR_DECK_HTML,
  CALENDAR_DECK_TS
} from 'src/app/constants/calendar.constants';

@Component({
  selector: 'app-calendar-examples',
  templateUrl: './calendar-examples.component.html',
  styleUrls: ['./calendar-examples.component.scss']
})
export class CalendarExamplesComponent {
  public calendarNoEvents = CALENDAR_NO_EVENTS_HTML;

  public calendarDefault = CALENDAR_DEFAULT;
  public calendarDefaultHtml = CALENDAR_DEFAULT_HTML;
  public calendarDefaultTs = CALENDAR_DEFAULT_TS;

  public calendarLink = CALENDAR_LINK;
  public calendarLinkHtml = CALENDAR_LINK_HTML;
  public calendarLinkTs = CALENDAR_LINK_TS;

  public calendarTwoReferences = CALENDAR_TWO_REFERENCES;
  public calendarTwoReferencesHtml = CALENDAR_TWO_REFERENCES_HTML;
  public calendarTwoReferencesTs = CALENDAR_TWO_REFERENCES_TS;

  public calendarCollapse = CALENDAR_COLLAPSE;
  public calendarCollapseHtml = CALENDAR_COLLAPSE_HTML;
  public calendarCollapseTs = CALENDAR_COLLAPSE_TS;

  public calendarCromaticRef = CALENDAR_CROMATIC_REF;
  public calendarCromaticRefHtml = CALENDAR_CROMATIC_REF_HTML;
  public calendarCromaticRefTs = CALENDAR_CROMATIC_REF_TS;

  public calendarDeck = CALENDAR_DECK;
  public calendarDeckHtml = CALENDAR_DECK_HTML;
  public calendarDeckTs = CALENDAR_DECK_TS;
}
