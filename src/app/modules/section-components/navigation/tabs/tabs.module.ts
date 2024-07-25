import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { ONavModule } from 'ngx-obelisco-17/nav';
import { NavigationTabsApiComponent } from './pages/navigation-tabs-api/navigation-tabs-api.component';
import { NavigationTabsExamplesComponent } from './pages/navigation-tabs-examples/navigation-tabs-examples.component';
import { OTableModule } from 'ngx-obelisco-17/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ExampleTabsOneComponent } from './pages/navigation-tabs-examples/routes-tabs/example-tabs-one/example-tabs-one.component';
import { ExampleTabsTwoComponent } from './pages/navigation-tabs-examples/routes-tabs/example-tabs-two/example-tabs-two.component';
import { ExampleTabsThreeComponent } from './pages/navigation-tabs-examples/routes-tabs/example-tabs-three/example-tabs-three.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [
    TabsComponent,
    NavigationTabsApiComponent,
    NavigationTabsExamplesComponent,
    ExampleTabsOneComponent,
    ExampleTabsTwoComponent,
    ExampleTabsThreeComponent,
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
  ],
})
export class TabsModule {}
