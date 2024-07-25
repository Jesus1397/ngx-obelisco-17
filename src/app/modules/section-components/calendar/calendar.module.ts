import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarApiComponent } from './pages/calendar-api/calendar-api.component';
import { CalendarExamplesComponent } from './pages/calendar-examples/calendar-examples.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

import { ONavModule } from 'ngx-obelisco-17/nav';
import { OCalendarModule } from 'ngx-obelisco-17/calendar';
import { OTableModule } from 'ngx-obelisco-17/table';
import { OButtonModule } from 'ngx-obelisco-17/button';

@NgModule({
  declarations: [
    CalendarApiComponent,
    CalendarExamplesComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    HighlightJsModule,
    ClipboardDirective,
    TabsLinkComponent,
    OCalendarModule,
    OButtonModule,
  ],
})
export class CalendarModule {}
