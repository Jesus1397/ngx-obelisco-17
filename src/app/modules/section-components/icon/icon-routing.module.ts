import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconApiComponent } from './pages/icon-api/icon-api.component';
import { IconExamplesComponent } from './pages/icon-examples/icon-examples.component';
import { IconBxDocComponent } from './pages/icon-bx-doc/icon-bx-doc.component';
import { IconMatDocComponent } from './pages/icon-mat-doc/icon-mat-doc.component';

const routes: Routes = [
  { path: 'api', component: IconApiComponent },
  { path: 'examples', component: IconExamplesComponent },
  { path: 'api/bx-doc', component: IconBxDocComponent },
  { path: 'api/bx-mat', component: IconMatDocComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconRoutingModule {}
