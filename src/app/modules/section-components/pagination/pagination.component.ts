import { Component } from '@angular/core';
import { PAGINATION_NAVIGATION } from 'src/app/constants/pagination.constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  public pagination = PAGINATION_NAVIGATION;
}
