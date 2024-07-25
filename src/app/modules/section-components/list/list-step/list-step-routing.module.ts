import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStepApiComponent } from './pages/list-step-api/list-step-api.component';
import { ListStepExamplesComponent } from './pages/list-step-examples/list-step-examples.component';

const routes: Routes = [
  { path: 'api', component: ListStepApiComponent },
  { path: 'examples', component: ListStepExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListStepRoutingModule {}
