import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OBadgeComponent } from './o-badge.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OBadgeComponent],
  imports: [CommonModule, RouterModule],
  exports: [OBadgeComponent]
})
export class OBadgeModule {}
