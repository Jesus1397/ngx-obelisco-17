import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomContentApiComponent } from './pages/custom-content-api/custom-content-api.component';
import { CustomContentExamplesComponent } from './pages/custom-content-examples/custom-content-examples.component';

const routes: Routes = [
  { path: 'api', component: CustomContentApiComponent },
  { path: 'examples', component: CustomContentExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomContentRoutingModule {}
