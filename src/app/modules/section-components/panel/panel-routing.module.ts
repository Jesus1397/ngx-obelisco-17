import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelExamplesComponent } from './pages/panel-examples/panel-examples.component';
import { PanelApiComponent } from './pages/panel-api/panel-api.component';

const routes: Routes = [
  { path: 'api', component: PanelApiComponent },
  { path: 'examples', component: PanelExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {}
