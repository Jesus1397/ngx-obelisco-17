import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchApiComponent } from './pages/switch-api/switch-api.component';
import { SwitchExamplesComponent } from './pages/switch-examples/switch-examples.component';

const routes: Routes = [
  { path: 'api', component: SwitchApiComponent },
  { path: 'examples', component: SwitchExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchRoutingModule {}
