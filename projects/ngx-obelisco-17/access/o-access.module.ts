import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAccessComponent } from './o-access/o-access.component';
import { RouterModule } from '@angular/router';
import { OAccessListComponent } from './o-access-list/o-access-list.component';

@NgModule({
  declarations: [OAccessComponent, OAccessListComponent],
  imports: [CommonModule, RouterModule],
  exports: [OAccessComponent, OAccessListComponent]
})
export class OAccessModule {}
