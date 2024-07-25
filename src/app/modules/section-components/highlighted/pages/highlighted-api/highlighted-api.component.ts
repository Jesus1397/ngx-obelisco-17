import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  HIGHLIGHTED_DATA_SOURCE,
  HIGHLIGHTED_TYPES,
  MEDIAIMAGE_INTERFACE,
  MEDIAIFRAME_INTERFACE,
  MEDIAVIDEO_INTERFACE,
  MEDIAIMAGE_DATA_SOURCE,
  MEDIAIFRAME_DATA_SOURCE,
  MEDIAVIDEO_DATA_SOURCE,
  HIGHLIGHTED_SECTIONS_DATA_SOURCE,
  HIGHLIGHTED_SECTIONS_IMAGE,
  HIGHLIGHTED_SECTIONS_IMAGE_TS,
  HIGHLIGHTED_SECTIONS_VIDEO,
  HIGHLIGHTED_SECTIONS_VIDEO_TS
} from 'src/app/constants/highlighted.constants';

@Component({
  selector: 'app-highlighted-api',
  templateUrl: './highlighted-api.component.html',
  styleUrls: ['./highlighted-api.component.scss']
})
export class HighlightedApiComponent {
  public columns = COLUMNS;
  public highlightedSource = HIGHLIGHTED_DATA_SOURCE;
  public types = HIGHLIGHTED_TYPES;
  public interfaceImage = MEDIAIMAGE_INTERFACE;
  public interfaceVideo = MEDIAVIDEO_INTERFACE;
  public interfaceIframe = MEDIAIFRAME_INTERFACE;
  public dataSourceInterfaceImage = MEDIAIMAGE_DATA_SOURCE;
  public dataSourceInterfaceVideo = MEDIAVIDEO_DATA_SOURCE;
  public dataSourceInterfaceIframe = MEDIAIFRAME_DATA_SOURCE;
  public dataSourceSections = HIGHLIGHTED_SECTIONS_DATA_SOURCE;
  public sectionsImageHtml = HIGHLIGHTED_SECTIONS_IMAGE;
  public sectionsImageTs = HIGHLIGHTED_SECTIONS_IMAGE_TS;
  public sectionsVideoHtml = HIGHLIGHTED_SECTIONS_VIDEO;
  public sectionsVideoTs = HIGHLIGHTED_SECTIONS_VIDEO_TS;
}
