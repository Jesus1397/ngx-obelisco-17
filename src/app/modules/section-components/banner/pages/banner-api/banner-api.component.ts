import { Component } from '@angular/core';
import {
  BANNER_BUTTON_HTML,
  BANNER_BUTTON_TS,
  BANNER_DATA_SOURCE,
  BANNER_SECTIONS,
  BANNER_SECTIONS_DATA_SOURCE
} from 'src/app/constants/banner.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-banner-api',
  templateUrl: './banner-api.component.html',
  styleUrls: ['./banner-api.component.scss']
})
export class BannerApiComponent {
  public dataSource = BANNER_DATA_SOURCE;
  public columns = COLUMNS;
  public bannerButtonHTML = BANNER_BUTTON_HTML;
  public bannerButtonTS = BANNER_BUTTON_TS;
  public dataSourceSections = BANNER_SECTIONS_DATA_SOURCE;
  public bannerSectionsHtml = BANNER_SECTIONS;
}
