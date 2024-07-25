import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownNavigationComponent } from './dropdown-navigation/dropdown-navigation.component';
import { DropdownSelectionComponent } from './dropdown-selection/dropdown-selection.component';

const routes: Routes = [
  {
    path: 'dropdown-navigation',
    component: DropdownNavigationComponent,
    loadChildren: () =>
      import('./dropdown-navigation/dropdown-navigation.module').then((m) => m.DropdownNavigationModule)
  },
  {
    path: 'dropdown-selection',
    component: DropdownSelectionComponent,
    loadChildren: () => import('./dropdown-selection/dropdown-selection.module').then((m) => m.DropdownSelectionModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'dropdown-navigation' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownRoutingModule {}
