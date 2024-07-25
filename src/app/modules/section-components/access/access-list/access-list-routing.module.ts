import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessListApiComponent } from './pages/access-list-api/access-list-api.component';
import { AccessListExampleComponent } from './pages/access-list-example/access-list-example.component';

const routes: Routes = [
  { path: 'api', component: AccessListApiComponent },
  { path: 'examples', component: AccessListExampleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessListRoutingModule {}
