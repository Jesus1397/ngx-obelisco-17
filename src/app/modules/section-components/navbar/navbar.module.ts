import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { NavbarExamplesComponent } from './pages/navbar-examples/navbar-examples.component';
import { NavbarApiComponent } from './pages/navbar-api/navbar-api.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OTableModule } from 'ngx-obelisco-17/table';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { ONavbarModule } from 'ngx-obelisco-17/navbar';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [NavbarComponent, NavbarExamplesComponent, NavbarApiComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ONavModule,
    OTableModule,
    ONavbarModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
  ],
})
export class NavbarModule {}
