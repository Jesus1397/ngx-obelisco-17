import { Component } from '@angular/core';
import { MAP_HTML, MAP_IFRAME, MAP_INSTITUTIONAL_HTML, MAP_TS } from 'src/app/constants/map.constants';

@Component({
  selector: 'app-map-examples',
  templateUrl: './map-examples.component.html',
  styleUrls: ['./map-examples.component.scss']
})
export class MapExamplesComponent {
  public mapHtml = MAP_HTML;
  public mapInstitutionalHtml = MAP_INSTITUTIONAL_HTML;
  public mapTs = MAP_TS;
  public iframe = MAP_IFRAME;
}
