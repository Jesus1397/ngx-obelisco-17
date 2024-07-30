import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipApiComponent } from './pages/tooltip-api/tooltip-api.component';
import { TooltipExamplesComponent } from './pages/tooltip-examples/tooltip-examples.component';

const routes: Routes = [
  { path: 'api', component: TooltipApiComponent },
  { path: 'examples', component: TooltipExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TooltipRoutingModule {}
