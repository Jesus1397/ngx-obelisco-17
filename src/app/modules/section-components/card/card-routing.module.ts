import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardApiComponent } from './pages/card-api/card-api.component';
import { CardExamplesComponent } from './pages/card-examples/card-examples.component';

const routes: Routes = [
  { path: 'api', component: CardApiComponent },
  { path: 'examples', component: CardExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule {}
