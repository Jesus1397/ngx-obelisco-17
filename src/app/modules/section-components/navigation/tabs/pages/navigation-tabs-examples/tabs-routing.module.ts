import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationTabsExamplesComponent } from './navigation-tabs-examples.component';
import { RouteTabsOneComponent } from './routes-tabs/route-tabs-one/route-tabs-one.component';
import { RouteTabsTwoComponent } from './routes-tabs/route-tabs-two/route-tabs-two.component';
import { RouteTabsThreeComponent } from './routes-tabs/route-tabs-three/route-tabs-three.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'components/navigation-tabs-examples',
    pathMatch: 'full'
  },
  {
    path: 'components/navigation-tabs-examples',
    component: NavigationTabsExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'ruta-pestaña-1',
        pathMatch: 'full'
      },
      {
        path: 'ruta-pestaña-1',
        component: RouteTabsOneComponent
      },
      {
        path: 'ruta-pestaña-2',
        component: RouteTabsTwoComponent
      },
      {
        path: 'ruta-pestaña-3',
        component: RouteTabsThreeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
