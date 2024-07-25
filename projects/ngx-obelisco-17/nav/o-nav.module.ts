import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavHorizontalComponent } from './o-nav-horizontal/o-nav-horizontal.component';
import { ONavVerticalComponent } from './o-nav-vertical/o-nav-vertical.component';
import { OTabsComponent } from './o-tabs/o-tabs.component';

@NgModule({
  declarations: [ONavHorizontalComponent, ONavVerticalComponent, OTabsComponent],
  imports: [CommonModule, RouterModule],
  exports: [ONavHorizontalComponent, ONavVerticalComponent, OTabsComponent]
})
export class ONavModule {}
