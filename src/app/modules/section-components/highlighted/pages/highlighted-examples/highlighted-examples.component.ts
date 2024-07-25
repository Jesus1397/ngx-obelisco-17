import { Component } from '@angular/core';
import {
  HIGHLIGHTED_BANNER_BG_HTML,
  HIGHLIGHTED_BANNER_IMAGE_HTML,
  HIGHLIGHTED_BANNER_NO_MEDIA_HTML,
  HIGHLIGHTED_BANNER_NO_MEDIA_TS,
  HIGHLIGHTED_BANNER_VIDEO_HTML,
  HIGHLIGHTED_VIDEO_TS,
  HIGHLIGHTED_DESCRIPTION,
  HIGHLIGHTED_DESCRIPTION_SM,
  HIGHLIGHTED_GROUPING_IMAGE_HTML,
  HIGHLIGHTED_IFRAME,
  HIGHLIGHTED_IMAGE_TS,
  HIGHLIGHTED_PICTURE,
  HIGHLIGHTED_TITLE,
  HIGHLIGHTED_VIDEO,
  HIGHLIGHTED_GROUPING_VIDEO_HTML,
  HIGHLIGHTED_GROUPING_NO_MEDIA_HTML,
  HIGHLIGHTED_LATERAL_HTML
} from 'src/app/constants/highlighted.constants';
@Component({
  selector: 'app-highlighted-examples',
  templateUrl: './highlighted-examples.component.html',
  styleUrls: ['./highlighted-examples.component.scss']
})
export class HighlightedExamplesComponent {
  public title = HIGHLIGHTED_TITLE;
  public description = HIGHLIGHTED_DESCRIPTION;
  public shortDescription = HIGHLIGHTED_DESCRIPTION_SM;
  public picture = HIGHLIGHTED_PICTURE;
  public video = HIGHLIGHTED_VIDEO;
  public iframe = HIGHLIGHTED_IFRAME;

  public imageTS = HIGHLIGHTED_IMAGE_TS;
  public videoTS = HIGHLIGHTED_VIDEO_TS;
  public noMediaTS = HIGHLIGHTED_BANNER_NO_MEDIA_TS;

  public bannerImageHtml = HIGHLIGHTED_BANNER_IMAGE_HTML;
  public bannerVideoHtml = HIGHLIGHTED_BANNER_VIDEO_HTML;
  public bannerHtml = HIGHLIGHTED_BANNER_NO_MEDIA_HTML;
  public bannerBgHtml = HIGHLIGHTED_BANNER_BG_HTML;

  public groupingImageHtml = HIGHLIGHTED_GROUPING_IMAGE_HTML;
  public groupingVideoHtml = HIGHLIGHTED_GROUPING_VIDEO_HTML;
  public groupingHtml = HIGHLIGHTED_GROUPING_NO_MEDIA_HTML;

  public lateralHtml = HIGHLIGHTED_LATERAL_HTML;
}
