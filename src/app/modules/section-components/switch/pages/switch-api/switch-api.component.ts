import { Component, OnInit } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import { SWITCH_DATA_SOURCE, SWITCH_DATA_SOURCE_OUTPUT } from 'src/app/constants/switch.constants';

@Component({
  selector: 'app-switch-api',
  templateUrl: './switch-api.component.html',
  styleUrls: ['./switch-api.component.scss']
})
export class SwitchApiComponent {
  public dataSource = SWITCH_DATA_SOURCE;
  public columns = COLUMNS;
  public dataSourceOutput = SWITCH_DATA_SOURCE_OUTPUT;
}
