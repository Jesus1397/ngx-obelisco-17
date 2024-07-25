import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OTableComponent } from './o-table.component';

@NgModule({
  declarations: [OTableComponent],
  imports: [CommonModule],
  exports: [OTableComponent]
})
export class OTableModule {}
