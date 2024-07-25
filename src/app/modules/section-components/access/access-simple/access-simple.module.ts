import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OAccessModule } from 'ngx-obelisco-17/access';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { OTableModule } from 'ngx-obelisco-17/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';

import { AccessSimpleRoutingModule } from './access-simple-routing.module';
import { AccessSimpleComponent } from './access-simple.component';
import { AccessSimpleApiComponent } from './page/access-simple-api/access-simple-api.component';
import { AccessSimpleExampleComponent } from './page/access-simple-example/access-simple-example.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [
    AccessSimpleComponent,
    AccessSimpleApiComponent,
    AccessSimpleExampleComponent,
  ],
  imports: [
    CommonModule,
    AccessSimpleRoutingModule,
    ONavModule,
    OTableModule,
    HighlightJsModule,
    ClipboardDirective,
    ViewerComponent,
    OAccessModule,
    TabsLinkComponent,
  ],
})
export class AccessSimpleModule {}
