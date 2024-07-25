import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarApiComponent } from './pages/navbar-api/navbar-api.component';
import { NavbarExamplesComponent } from './pages/navbar-examples/navbar-examples.component';

const routes: Routes = [
  { path: 'api', component: NavbarApiComponent },
  { path: 'examples', component: NavbarExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule {}
