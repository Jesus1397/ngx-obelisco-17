import { Component } from '@angular/core';
import {
  BANNER_ICON,
  BANNER_TEXT_BUTTON,
  BANNER_ICON_COOKIE,
  BANNER_TYPES_HTML,
  BANNER_TYPES_TS,
  BANNER_BUTTON_HTML,
  BANNER_BUTTON_TS,
  BANNER_BUTTONS_HTML,
  BANNER_CONTENT
} from 'src/app/constants/banner.constants';

@Component({
  selector: 'app-banner-examples',
  templateUrl: './banner-examples.component.html',
  styleUrls: ['./banner-examples.component.scss']
})
export class BannerExamplesComponent {
  public content = BANNER_CONTENT;
  public bannerTypesHTML = BANNER_TYPES_HTML;
  public bannerTypesTS = BANNER_TYPES_TS;
  public textButton = BANNER_TEXT_BUTTON;
  public icon = BANNER_ICON;
  public bannerButtonHTML = BANNER_BUTTON_HTML;
  public bannerButtonTS = BANNER_BUTTON_TS;
  public iconCookie = BANNER_ICON_COOKIE;
  public bannerButtonsHTML = BANNER_BUTTONS_HTML;
}
