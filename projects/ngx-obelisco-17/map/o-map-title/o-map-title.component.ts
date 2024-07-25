import { AfterContentInit, Component, Input, Optional } from '@angular/core';
import { OMapComponent } from '../o-map.component';

@Component({
  selector: 'o-map-title',
  templateUrl: './o-map-title.component.html',
  styleUrls: ['./o-map-title.component.scss']
})
export class OMapTitleComponent implements AfterContentInit {
  constructor(@Optional() private oMap: OMapComponent) {}
  @Input() public customClasses: string = '';
  public isLateral: boolean = true;

  ngAfterContentInit() {
    if (this.oMap) {
      this.oMap.type == 'lateral' ? (this.isLateral = true) : (this.isLateral = false);
    }
  }
}
