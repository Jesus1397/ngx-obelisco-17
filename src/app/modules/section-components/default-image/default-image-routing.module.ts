import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultImageApiComponent } from './pages/default-image-api/default-image-api.component';
import { DefaultImageExamplesComponent } from './pages/default-image-examples/default-image-examples.component';

const routes: Routes = [
  { path: 'api', component: DefaultImageApiComponent },
  { path: 'examples', component: DefaultImageExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultImageRoutingModule {}
