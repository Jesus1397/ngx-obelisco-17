import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationHorizontalComponent } from './navigation-horizontal/navigation-horizontal.component';
import { NavigationVerticalComponent } from './navigation-vertical/navigation-vertical.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: 'navigation-horizontal',
    component: NavigationHorizontalComponent,
    loadChildren: () =>
      import('./navigation-horizontal/navigation-horizontal.module').then((m) => m.NavigationHorizontalModule)
  },
  {
    path: 'navigation-vertical',
    component: NavigationVerticalComponent,
    loadChildren: () =>
      import('./navigation-vertical/navigation-vertical.module').then((m) => m.NavigationVerticalModule)
  },
  {
    path: 'tabs',
    component: TabsComponent,
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'navigation-horizontal' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {}
