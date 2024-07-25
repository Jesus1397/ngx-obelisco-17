import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapApiComponent } from './pages/map-api/map-api.component';
import { MapExamplesComponent } from './pages/map-examples/map-examples.component';

const routes: Routes = [
  { path: 'api', component: MapApiComponent },
  { path: 'examples', component: MapExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule {}
