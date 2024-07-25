import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OCalendarComponent } from './o-calendar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OCalendarComponent],
  imports: [CommonModule, RouterModule],
  exports: [OCalendarComponent]
})
export class OCalendarModule {}
