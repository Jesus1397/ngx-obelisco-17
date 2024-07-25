import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavbarComponent } from './o-navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ONavbarComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [ONavbarComponent],
})
export class ONavbarModule {}
