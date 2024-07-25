import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OAccessModule } from 'ngx-obelisco-17/access';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { OTableModule } from 'ngx-obelisco-17/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { AccessListRoutingModule } from './access-list-routing.module';
import { AccessListComponent } from './access-list.component';
import { AccessListApiComponent } from './pages/access-list-api/access-list-api.component';
import { AccessListExampleComponent } from './pages/access-list-example/access-list-example.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [
    AccessListComponent,
    AccessListApiComponent,
    AccessListExampleComponent,
  ],
  imports: [
    CommonModule,
    AccessListRoutingModule,
    ONavModule,
    OTableModule,
    HighlightJsModule,
    ClipboardDirective,
    ViewerComponent,
    OAccessModule,
    TabsLinkComponent,
  ],
})
export class AccessListModule {}
