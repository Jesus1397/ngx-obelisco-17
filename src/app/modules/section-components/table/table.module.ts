import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ONavModule } from 'ngx-obelisco-17/nav';
import { OTableModule } from 'ngx-obelisco-17/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TableApiComponent } from './pages/table-api/table-api.component';
import { TableExamplesComponent } from './pages/table-examples/table-examples.component';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [TableComponent, TableApiComponent, TableExamplesComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent
  ]
})
export class TableModule {}
