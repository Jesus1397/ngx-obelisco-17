import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonApiComponent } from './pages/button-api/button-api.component';
import { ButtonExamplesComponent } from './pages/button-examples/button-examples.component';

const routes: Routes = [
  { path: 'api', component: ButtonApiComponent },
  { path: 'examples', component: ButtonExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRoutingModule {}
