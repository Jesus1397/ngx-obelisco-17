import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { CardApiComponent } from './pages/card-api/card-api.component';
import { CardExamplesComponent } from './pages/card-examples/card-examples.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { OCardModule } from 'ngx-obelisco-17/card';
import { OBadgeModule } from 'ngx-obelisco-17/badge';
import { OTableModule } from 'ngx-obelisco-17/table';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [CardComponent, CardApiComponent, CardExamplesComponent],
  imports: [
    CommonModule,
    CardRoutingModule,
    ONavModule,
    ViewerComponent,
    OCardModule,
    ClipboardDirective,
    HighlightJsModule,
    OTableModule,
    TabsLinkComponent,
    OBadgeModule,
  ],
})
export class CardModule {}
