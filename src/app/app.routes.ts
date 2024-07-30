import { Routes } from '@angular/router';
import { SectionComponentsComponent } from './modules/section-components/section-components.component';
import { GetStartedComponent } from './modules/get-started/get-started.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'get-started',
    component: GetStartedComponent,
    loadChildren: () =>
      import('./modules/get-started/get-started.module').then(
        (m) => m.GetStartedModule
      ),
  },
  {
    path: 'components',
    component: SectionComponentsComponent,
    loadChildren: () =>
      import('./modules/section-components/section-components.module').then(
        (m) => m.SectionComponentsModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
