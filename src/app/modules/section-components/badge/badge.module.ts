import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeApiComponent } from './pages/badge-api/badge-api.component';
import { BadgeExamplesComponent } from './pages/badge-examples/badge-examples.component';
import { BadgeRoutingModule } from './badge-routing.module';
import { BadgeComponent } from './badge.component';

import { ONavModule } from 'ngx-obelisco-17/nav';
import { OBadgeModule } from 'ngx-obelisco-17/badge';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OTableModule } from 'ngx-obelisco-17/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonModule } from 'ngx-obelisco-17/button';

@NgModule({
  declarations: [BadgeApiComponent, BadgeExamplesComponent, BadgeComponent],
  imports: [
    CommonModule,
    BadgeRoutingModule,
    ONavModule,
    OBadgeModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    OTableModule,
    TabsLinkComponent,
    OButtonModule,
  ],
})
export class BadgeModule {}
