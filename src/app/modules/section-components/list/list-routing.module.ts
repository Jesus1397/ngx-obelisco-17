import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStepComponent } from './list-step/list-step.component';

const routes: Routes = [
  {
    path: 'list-step',
    component: ListStepComponent,
    loadChildren: () => import('./list-step/list-step.module').then((m) => m.ListStepModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'list-step' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {}
