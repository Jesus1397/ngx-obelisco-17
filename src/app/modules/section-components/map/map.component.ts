import { Component } from '@angular/core';
import { MAP_NAVIGATION } from 'src/app/constants/map.constants';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  public navigationMap = MAP_NAVIGATION;
}
