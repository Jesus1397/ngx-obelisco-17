import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalApiComponent } from './pages/modal-api/modal-api.component';
import { ModalExamplesComponent } from './pages/modal-examples/modal-examples.component';

const routes: Routes = [
  { path: 'api', component: ModalApiComponent },
  { path: 'examples', component: ModalExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalRoutingModule {}
