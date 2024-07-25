import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableApiComponent } from './pages/table-api/table-api.component';
import { TableExamplesComponent } from './pages/table-examples/table-examples.component';

const routes: Routes = [
  { path: 'api', component: TableApiComponent },
  { path: 'examples', component: TableExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
