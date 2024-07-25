import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownSelectionApiComponent } from './pages/dropdown-selection-api/dropdown-selection-api.component';
import { DropdownSelectionExamplesComponent } from './pages/dropdown-selection-examples/dropdown-selection-examples.component';

const routes: Routes = [
  { path: 'api', component: DropdownSelectionApiComponent },
  { path: 'examples', component: DropdownSelectionExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownSelectionRoutingModule {}
