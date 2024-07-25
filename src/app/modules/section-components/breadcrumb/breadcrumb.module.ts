import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OBreadcrumbModule } from 'ngx-obelisco-17/breadcrumb';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { OTableModule } from 'ngx-obelisco-17/table';

import { BreadcrumbRoutingModule } from './breadcrumb-routing.module';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbApiComponent } from './pages/breadcrumb-api/breadcrumb-api.component';
import { BreadcrumbExamplesComponent } from './pages/breadcrumb-examples/breadcrumb-examples.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    BreadcrumbApiComponent,
    BreadcrumbExamplesComponent,
  ],
  imports: [
    CommonModule,
    BreadcrumbRoutingModule,
    ONavModule,
    ViewerComponent,
    OBreadcrumbModule,
    ClipboardDirective,
    HighlightJsModule,
    OTableModule,
    TabsLinkComponent,
  ],
})
export class BreadcrumbModule {}
