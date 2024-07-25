import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessSimpleApiComponent } from './page/access-simple-api/access-simple-api.component';
import { AccessSimpleExampleComponent } from './page/access-simple-example/access-simple-example.component';

const routes: Routes = [
  { path: 'api', component: AccessSimpleApiComponent },
  { path: 'examples', component: AccessSimpleExampleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessSimpleRoutingModule {}
