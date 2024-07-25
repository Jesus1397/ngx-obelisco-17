import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OMatIconComponent } from './o-mat-icon/o-mat-icon.component';
import { OBxIconComponent } from './o-bx-icon/o-bx-icon.component';

@NgModule({
  declarations: [OMatIconComponent, OBxIconComponent],
  imports: [CommonModule],
  exports: [OMatIconComponent, OBxIconComponent]
})
export class OIconModule {}
