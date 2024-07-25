import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImageRoutingModule } from './default-image-routing.module';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OTableModule } from 'ngx-obelisco-17/table';
import { DefaultImageExamplesComponent } from './pages/default-image-examples/default-image-examples.component';
import { DefaultImageApiComponent } from './pages/default-image-api/default-image-api.component';
import { ODefaultImageDirective } from 'ngx-obelisco-17/directives';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [DefaultImageExamplesComponent, DefaultImageApiComponent],
  imports: [
    CommonModule,
    DefaultImageRoutingModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
    ODefaultImageDirective,
  ],
})
export class DefaultImageModule {}
