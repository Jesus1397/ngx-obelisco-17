import { Component } from '@angular/core';
import {
  CARD_DATA_SOURCE,
  CARD_BADGE_DATA_SOURCE,
  CARD_BADGES_INTERFACE,
  MEDIAIMAGE_CARDS_DATA_SOURCE,
  MEDIAIMAGE_CARDS_INTERFACE,
  CARD_SECTIONS_DATA_SOURCE,
  CARD_TITLE_DATA_SOURCE,
  CARD_IMAGE_DATA_SOURCE,
  CARD_SECTIONS_VERTICAL,
  CARD_SECTIONS_VERTICAL_TS,
  CARD_SECTIONS_HORIZONTAL
} from 'src/app/constants/card.constants';
import { BADGE_TYPES } from 'src/app/constants/badge.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-card-api',
  templateUrl: './card-api.component.html',
  styleUrls: ['./card-api.component.scss']
})
export class CardApiComponent {
  public columns = COLUMNS;
  public dataSourceCard = CARD_DATA_SOURCE;
  public cardBadgesInterface = CARD_BADGES_INTERFACE;
  public dataSourceCardBadges = CARD_BADGE_DATA_SOURCE;
  public badgeTypesInterface = BADGE_TYPES;
  public mediaImageInterface = MEDIAIMAGE_CARDS_INTERFACE;
  public mediaImagedataSourceInterface = MEDIAIMAGE_CARDS_DATA_SOURCE;
  public dataSourceSections = CARD_SECTIONS_DATA_SOURCE;
  public dataSourceCardTitle = CARD_TITLE_DATA_SOURCE;
  public dataSourceCardImage = CARD_IMAGE_DATA_SOURCE;
  public sectionsVerticalHtml = CARD_SECTIONS_VERTICAL;
  public sectionsVerticalTs = CARD_SECTIONS_VERTICAL_TS;
  public sectionsHorizontalHtml = CARD_SECTIONS_HORIZONTAL;
}
