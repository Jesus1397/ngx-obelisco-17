import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OBreadcrumbComponent } from './o-breadcrumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OBreadcrumbComponent],
  imports: [CommonModule, RouterModule],
  exports: [OBreadcrumbComponent]
})
export class OBreadcrumbModule {}
