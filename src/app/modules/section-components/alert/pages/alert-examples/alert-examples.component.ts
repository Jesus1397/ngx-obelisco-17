import { Component } from '@angular/core';
import {
  ALERT_EXAMPLE_COLORS,
  ALERT_EXAMPLE_DISMISSIBLE,
  ALERT_EXAMPLE_HIGHLIGHT,
  ALERT_EXAMPLE_HIGHLIGHT_LINK,
  ALERT_EXAMPLE_LISTS_HTML,
  ALERT_EXAMPLE_LISTS_TS,
  ALERT_EXAMPLE_LIST_ITEMS,
  ALERT_EXAMPLE_LIST_LINK_ITEMS
} from 'src/app/constants/alert.constants';

@Component({
  selector: 'app-alert-examples',
  templateUrl: './alert-examples.component.html',
  styleUrls: ['./alert-examples.component.scss']
})
export class AlertExamplesComponent {
  constructor() {}
  public exampleColors = ALERT_EXAMPLE_COLORS;
  public exampleDismissible = ALERT_EXAMPLE_DISMISSIBLE;
  public exampleHighlight = ALERT_EXAMPLE_HIGHLIGHT;
  public exampleHighlightLink = ALERT_EXAMPLE_HIGHLIGHT_LINK;
  public exampleListsHtml = ALERT_EXAMPLE_LISTS_HTML;
  public exampleListsTs = ALERT_EXAMPLE_LISTS_TS;
  public listLinkItems = ALERT_EXAMPLE_LIST_LINK_ITEMS;
  public listItems = ALERT_EXAMPLE_LIST_ITEMS;
}
