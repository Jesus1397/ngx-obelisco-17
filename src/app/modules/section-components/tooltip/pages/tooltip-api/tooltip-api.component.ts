import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import { DATA_SOURCE_TOOLTIP, TOOLTIP_DIRECTIONS } from 'src/app/constants/tooltip.constants';

@Component({
  selector: 'app-tooltip-api',
  templateUrl: './tooltip-api.component.html',
  styleUrls: ['./tooltip-api.component.scss']
})
export class TooltipApiComponent {
  public dataSource = DATA_SOURCE_TOOLTIP;
  public columns = COLUMNS;
  public directions = TOOLTIP_DIRECTIONS;
}
