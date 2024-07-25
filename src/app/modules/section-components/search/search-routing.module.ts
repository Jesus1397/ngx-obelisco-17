import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchApiComponent } from './pages/search-api/search-api.component';
import { SearchExamplesComponent } from './pages/search-examples/search-examples.component';

const routes: Routes = [
  { path: 'api', component: SearchApiComponent },
  { path: 'examples', component: SearchExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
