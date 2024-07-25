import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusMessageApiComponent } from './pages/status-message-api/status-message-api.component';
import { StatusMessageExampleComponent } from './pages/status-message-example/status-message-example.component';

const routes: Routes = [
  { path: 'api', component: StatusMessageApiComponent },
  { path: 'examples', component: StatusMessageExampleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusMessageRoutingModule {}
