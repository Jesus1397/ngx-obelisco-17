import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollapseApiComponent } from './pages/collapse-api/collapse-api.component';
import { CollapseExamplesComponent } from './pages/collapse-examples/collapse-examples.component';

const routes: Routes = [
  { path: 'api', component: CollapseApiComponent },
  { path: 'examples', component: CollapseExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollapseRoutingModule {}
