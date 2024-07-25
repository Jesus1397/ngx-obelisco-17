import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OMapComponent } from './o-map.component';
import { OMapHeaderComponent } from './o-map-header/o-map-header.component';
import { OMapTitleComponent } from './o-map-title/o-map-title.component';
import { OMapDescriptionComponent } from './o-map-description/o-map-description.component';
import { OMapIframeComponent } from './o-map-iframe/o-map-iframe.component';
import { OMapFooterComponent } from './o-map-footer/o-map-footer.component';
import { OMapContentComponent } from './o-map-content/o-map-content.component';

@NgModule({
  declarations: [
    OMapComponent,
    OMapHeaderComponent,
    OMapTitleComponent,
    OMapDescriptionComponent,
    OMapIframeComponent,
    OMapFooterComponent,
    OMapContentComponent
  ],
  imports: [CommonModule],
  exports: [
    OMapComponent,
    OMapHeaderComponent,
    OMapTitleComponent,
    OMapDescriptionComponent,
    OMapIframeComponent,
    OMapFooterComponent,
    OMapContentComponent
  ]
})
export class OMapModule {}
