import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OPaginationComponent } from './o-pagination.component';
import { PaginationNumberComponent } from './components/pagination-number/pagination-number.component';
import { PaginationItemComponent } from './components/pagination-item/pagination-item.component';

@NgModule({
  declarations: [OPaginationComponent, PaginationNumberComponent, PaginationItemComponent],
  imports: [CommonModule],
  exports: [OPaginationComponent]
})
export class OPaginationModule {}
