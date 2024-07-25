import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { ButtonApiComponent } from './pages/button-api/button-api.component';
import { ButtonExamplesComponent } from './pages/button-examples/button-examples.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OTableModule } from 'ngx-obelisco-17/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonModule } from 'ngx-obelisco-17/button';
import { OSpinnerModule } from 'ngx-obelisco-17/spinner';

@NgModule({
  declarations: [ButtonComponent, ButtonApiComponent, ButtonExamplesComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    HighlightJsModule,
    ClipboardDirective,
    TabsLinkComponent,
    OButtonModule,
    OSpinnerModule,
  ],
})
export class ButtonModule {}
