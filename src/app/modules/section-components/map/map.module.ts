import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapApiComponent } from './pages/map-api/map-api.component';
import { MapExamplesComponent } from './pages/map-examples/map-examples.component';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OTableModule } from 'ngx-obelisco-17/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonModule } from 'ngx-obelisco-17/button';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { OMapModule } from 'ngx-obelisco-17/map/o-map.module';

@NgModule({
  declarations: [MapComponent, MapApiComponent, MapExamplesComponent],
  imports: [
    CommonModule,
    OMapModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
    OButtonModule,
    MapRoutingModule,
  ],
})
export class MapModule {}
