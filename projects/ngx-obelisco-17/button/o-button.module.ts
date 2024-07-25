import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OButtonComponent } from './o-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [OButtonComponent]
})
export class OButtonModule {}
