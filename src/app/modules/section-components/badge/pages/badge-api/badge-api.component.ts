import { Component } from '@angular/core';
import { BADGE_DATA_SOURCE, BADGE_TYPES } from 'src/app/constants/badge.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-badge-api',
  templateUrl: './badge-api.component.html',
  styleUrls: ['./badge-api.component.scss']
})
export class BadgeApiComponent {
  constructor() {}
  public dataSource = BADGE_DATA_SOURCE;
  public columns = COLUMNS;
  public colors = BADGE_TYPES;
}
