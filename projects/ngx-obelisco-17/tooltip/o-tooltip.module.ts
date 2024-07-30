import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import {
  provideTippyConfig,
  tooltipVariation,
  popperVariation,
} from '@ngneat/helipopper';

@NgModule({
  declarations: [TooltipDirective],
  imports: [
    CommonModule,
    //   TippyModule.forRoot({
    //     variations: {
    //       tooltip: tooltipVariation,
    //       popper: popperVariation,
    //     },
    //   }),
  ],
  providers: [
    provideTippyConfig({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      },
    }),
  ],
  exports: [TooltipDirective],
})
export class OTooltipModule {}
