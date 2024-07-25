import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightedApiComponent } from './pages/highlighted-api/highlighted-api.component';
import { HighlightedExamplesComponent } from './pages/highlighted-examples/highlighted-examples.component';

const routes: Routes = [
  { path: 'api', component: HighlightedApiComponent },
  { path: 'examples', component: HighlightedExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighlightedRoutingModule {}
