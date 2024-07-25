import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarApiComponent } from './pages/calendar-api/calendar-api.component';
import { CalendarExamplesComponent } from './pages/calendar-examples/calendar-examples.component';

const routes: Routes = [
  { path: 'api', component: CalendarApiComponent },
  { path: 'examples', component: CalendarExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {}
