import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownNavigationApiComponent } from './pages/dropdown-navigation-api/dropdown-navigation-api.component';
import { DropdownNavigationExamplesComponent } from './pages/dropdown-navigation-examples/dropdown-navigation-examples.component';

const routes: Routes = [
  { path: 'api', component: DropdownNavigationApiComponent },
  { path: 'examples', component: DropdownNavigationExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownNavigationRoutingModule {}
