import { Component } from '@angular/core';
import {
  PAGINATION_END_EXAMPLE_HTML,
  PAGINATION_EXAMPLE_TS,
  PAGINATION_MID_EXAMPLE_HTML,
  PAGINATION_START_EXAMPLE_HTML,
  PAGINATION_WITHOUT_NUMBERS_EXAMPLE_HTML
} from 'src/app/constants/pagination.constants';

@Component({
  selector: 'app-pagination-examples',
  templateUrl: './pagination-examples.component.html',
  styleUrls: ['./pagination-examples.component.scss']
})
export class PaginationExamplesComponent {
  public exampleStartHTML = PAGINATION_START_EXAMPLE_HTML;
  public exampleMidHTML = PAGINATION_MID_EXAMPLE_HTML;
  public exampleEndHTML = PAGINATION_END_EXAMPLE_HTML;
  public exampleWithoutNumbersHTML = PAGINATION_WITHOUT_NUMBERS_EXAMPLE_HTML;
  public exampleTS = PAGINATION_EXAMPLE_TS;

  public actualPage(event: number): void {
    console.log(event);
  }
}
