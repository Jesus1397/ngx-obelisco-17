import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpinnerApiComponent } from './pages/spinner-api/spinner-api.component';
import { SpinnerExamplesComponent } from './pages/spinner-examples/spinner-examples.component';

const routes: Routes = [
  { path: 'api', component: SpinnerApiComponent },
  { path: 'examples', component: SpinnerExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinnerRoutingModule {}
