import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationHorizontalRoutingModule } from './navigation-horizontal-routing.module';
import { NavigationHorizontalComponent } from './navigation-horizontal.component';
import { NavigationHorizontalApiComponent } from './pages/navigation-horizontal-api/navigation-horizontal-api.component';
import { NavigationHorizontalExamplesComponent } from './pages/navigation-horizontal-examples/navigation-horizontal-examples.component';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { OTableModule } from 'ngx-obelisco-17/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [
    NavigationHorizontalComponent,
    NavigationHorizontalApiComponent,
    NavigationHorizontalExamplesComponent,
  ],
  imports: [
    CommonModule,
    NavigationHorizontalRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
  ],
})
export class NavigationHorizontalModule {}
