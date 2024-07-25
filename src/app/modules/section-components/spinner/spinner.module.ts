import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OSpinnerModule } from 'ngx-obelisco-17/spinner';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { OTableModule } from 'ngx-obelisco-17/table';
import { SpinnerRoutingModule } from './spinner.routing.module';

import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { SpinnerComponent } from './spinner.component';
import { SpinnerApiComponent } from './pages/spinner-api/spinner-api.component';
import { SpinnerExamplesComponent } from './pages/spinner-examples/spinner-examples.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    SpinnerApiComponent,
    SpinnerExamplesComponent,
  ],
  imports: [
    CommonModule,
    SpinnerRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    OSpinnerModule,
    TabsLinkComponent,
  ],
})
export class SpinnerModule {}
