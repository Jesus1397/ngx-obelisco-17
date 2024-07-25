import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OFooterComponent } from './o-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OFooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [OFooterComponent]
})
export class OFooterModule {}
