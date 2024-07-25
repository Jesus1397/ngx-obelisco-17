import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSearchComponent } from './o-search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OSearchComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [OSearchComponent]
})
export class OSearchModule {}
