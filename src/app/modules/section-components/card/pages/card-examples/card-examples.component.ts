import { Component } from '@angular/core';
import {
  CARD_EVENT_HTML,
  CARD_HORIZONTAL_ICON_HTML,
  CARD_HORIZONTAL_IMAGE,
  CARD_HORIZONTAL_IMAGE_HTML,
  CARD_HORIZONTAL_TEXT_HTML,
  CARD_NEWS_HTML,
  CARD_THEME_HTML,
  CARD_THEME_IMAGE,
  CARD_VERTICAL_ICON_HTML,
  CARD_VERTICAL_IMAGE,
  CARD_VERTICAL_IMAGE_HTML,
  CARD_LAYOUT_TWO,
  CARD_LAYOUT_THREE
} from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-examples',
  templateUrl: './card-examples.component.html',
  styleUrls: ['./card-examples.component.scss']
})
export class CardExamplesComponent {
  public imageTheme = CARD_THEME_IMAGE;
  public imageHorizontal = CARD_HORIZONTAL_IMAGE;
  public imageVertical = CARD_VERTICAL_IMAGE;

  public cardThemeHtml = CARD_THEME_HTML;
  public cardIconHtml = CARD_HORIZONTAL_ICON_HTML;
  public cardImageHtml = CARD_HORIZONTAL_IMAGE_HTML;
  public cardTextHtml = CARD_HORIZONTAL_TEXT_HTML;

  public cardIconVerticalHtml = CARD_VERTICAL_ICON_HTML;
  public cardImageVerticalHtml = CARD_VERTICAL_IMAGE_HTML;
  public cardNewsHtml = CARD_NEWS_HTML;
  public cardEventHtml = CARD_EVENT_HTML;

  public cardLayoutThree = CARD_LAYOUT_THREE;
  public cardLayoutTwo = CARD_LAYOUT_TWO;
}
