import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertExamplesComponent } from './pages/alert-examples/alert-examples.component';
import { AlertApiComponent } from './pages/alert-api/alert-api.component';

const routes: Routes = [
  { path: 'api', component: AlertApiComponent },
  { path: 'examples', component: AlertExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule {}
