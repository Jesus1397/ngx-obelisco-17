import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockExamplesComponent } from './pages/block-examples/block-examples.component';
import { BlockApiComponent } from './pages/block-api/block-api.component';

const routes: Routes = [
  { path: 'api', component: BlockApiComponent },
  { path: 'examples', component: BlockExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockRoutingModule {}
