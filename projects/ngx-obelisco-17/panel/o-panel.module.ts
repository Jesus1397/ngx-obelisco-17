import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ODefaultImageDirective } from 'ngx-obelisco-17/directives';
import { OPanelSmallComponent } from './o-panel-small/o-panel-small.component';

@NgModule({
  declarations: [OPanelSmallComponent],
  imports: [CommonModule, ODefaultImageDirective],
  exports: [OPanelSmallComponent],
})
export class OPanelModule {}
