import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContentRoutingModule } from './custom-content-routing.module';
import { CustomContentComponent } from './custom-content.component';
import { OTableModule } from 'ngx-obelisco-17/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { CustomContentExamplesComponent } from './pages/custom-content-examples/custom-content-examples.component';
import { CustomContentApiComponent } from './pages/custom-content-api/custom-content-api.component';
import { OCustomContentDirective } from 'ngx-obelisco-17/directives';
import { OBlockModule } from 'ngx-obelisco-17/block';
import { OButtonModule } from 'ngx-obelisco-17/button';
import { OAlertModule } from 'ngx-obelisco-17/alert';

@NgModule({
  declarations: [
    CustomContentComponent,
    CustomContentExamplesComponent,
    CustomContentApiComponent,
  ],
  imports: [
    CommonModule,
    CustomContentRoutingModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
    OCustomContentDirective,
    OBlockModule,
    OButtonModule,
    OAlertModule,
  ],
})
export class CustomContentModule {}
