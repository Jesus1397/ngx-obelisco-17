import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationApiComponent } from './pages/pagination-api/pagination-api.component';
import { PaginationExamplesComponent } from './pages/pagination-examples/pagination-examples.component';

const routes: Routes = [
  { path: 'api', component: PaginationApiComponent },
  { path: 'examples', component: PaginationExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginationRoutingModule {}
