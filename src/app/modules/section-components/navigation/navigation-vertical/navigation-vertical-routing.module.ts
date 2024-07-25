import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationVerticalApiComponent } from './pages/navigation-vertical-api/navigation-vertical-api.component';
import { NavigationVerticalExamplesComponent } from './pages/navigation-vertical-examples/navigation-vertical-examples.component';

const routes: Routes = [
  { path: 'api', component: NavigationVerticalApiComponent },
  { path: 'examples', component: NavigationVerticalExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationVerticalRoutingModule {}
