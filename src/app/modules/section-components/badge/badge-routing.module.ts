import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeApiComponent } from './pages/badge-api/badge-api.component';
import { BadgeExamplesComponent } from './pages/badge-examples/badge-examples.component';

const routes: Routes = [
  { path: 'api', component: BadgeApiComponent },
  { path: 'examples', component: BadgeExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgeRoutingModule {}
