import { Component, OnInit } from '@angular/core';
import { TOOLTIP_NAVIGATION } from 'src/app/constants/tooltip.constants';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  public navigation = TOOLTIP_NAVIGATION;
}
