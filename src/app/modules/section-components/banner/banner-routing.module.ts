import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerApiComponent } from './pages/banner-api/banner-api.component';
import { BannerExamplesComponent } from './pages/banner-examples/banner-examples.component';

const routes: Routes = [
  { path: 'api', component: BannerApiComponent },
  { path: 'examples', component: BannerExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule {}
