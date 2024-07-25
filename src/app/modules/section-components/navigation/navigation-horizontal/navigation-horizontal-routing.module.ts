import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationHorizontalApiComponent } from './pages/navigation-horizontal-api/navigation-horizontal-api.component';
import { NavigationHorizontalExamplesComponent } from './pages/navigation-horizontal-examples/navigation-horizontal-examples.component';

const routes: Routes = [
  { path: 'api', component: NavigationHorizontalApiComponent },
  { path: 'examples', component: NavigationHorizontalExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationHorizontalRoutingModule {}
