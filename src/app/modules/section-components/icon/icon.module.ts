import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconApiComponent } from './pages/icon-api/icon-api.component';
import { IconExamplesComponent } from './pages/icon-examples/icon-examples.component';
import { IconRoutingModule } from './icon-routing.module';
import { IconComponent } from './icon.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OIconModule } from 'ngx-obelisco-17/icon';
import { IconBxDocComponent } from './pages/icon-bx-doc/icon-bx-doc.component';
import { OCollapseModule } from 'ngx-obelisco-17/collapse';
import { IconMatDocComponent } from './pages/icon-mat-doc/icon-mat-doc.component';

@NgModule({
  declarations: [
    IconApiComponent,
    IconExamplesComponent,
    IconComponent,
    IconBxDocComponent,
    IconMatDocComponent,
  ],
  imports: [
    CommonModule,
    IconRoutingModule,
    TabsLinkComponent,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    OIconModule,
    OCollapseModule,
  ],
})
export class IconModule {}
