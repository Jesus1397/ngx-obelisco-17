import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsFormApiComponent } from './pages/steps-form-api/steps-form-api.component';
import { StepsFormExamplesComponent } from './pages/steps-form-examples/steps-form-examples.component';

const routes: Routes = [
  { path: 'api', component: StepsFormApiComponent },
  { path: 'examples', component: StepsFormExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsFormRoutingModule {}
