import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationTabsApiComponent } from './pages/navigation-tabs-api/navigation-tabs-api.component';
import { NavigationTabsExamplesComponent } from './pages/navigation-tabs-examples/navigation-tabs-examples.component';

const routes: Routes = [
  { path: 'api', component: NavigationTabsApiComponent },
  { path: 'examples', component: NavigationTabsExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
