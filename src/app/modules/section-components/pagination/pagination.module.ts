import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';
import { PaginationApiComponent } from './pages/pagination-api/pagination-api.component';
import { PaginationExamplesComponent } from './pages/pagination-examples/pagination-examples.component';
import { OPaginationModule } from 'ngx-obelisco-17/pagination';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { OTableModule } from 'ngx-obelisco-17/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [
    PaginationComponent,
    PaginationApiComponent,
    PaginationExamplesComponent,
  ],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    OPaginationModule,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
  ],
})
export class PaginationModule {}
