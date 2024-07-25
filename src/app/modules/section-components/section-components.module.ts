import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionComponentsRoutingModule } from './section-components-routing.module';
import { OCardModule } from 'ngx-obelisco-17/card';
import { SectionComponentsComponent } from './section-components.component';
import { ONavModule } from 'ngx-obelisco-17/nav';

@NgModule({
  declarations: [SectionComponentsComponent],
  imports: [
    CommonModule,
    SectionComponentsRoutingModule,
    OCardModule,
    ONavModule,
  ],
})
export class SectionComponentsModule {}
