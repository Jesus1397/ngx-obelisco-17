import { Component } from '@angular/core';
import {
  ACCESS_LIST_ACCESS,
  ACCESS_LIST_CATEGORY,
  ACCESS_LIST_EXAMPLE_ACCESS_TS,
  ACCESS_LIST_EXAMPLE_CATEGORY_TS,
  ACCESS_LIST_EXAMPLE_HTML,
  ACCESS_LIST_EXAMPLE_TS,
  ACCESS_LIST_FOOTER
} from 'src/app/constants/access.constants';

@Component({
  selector: 'app-access-list-example',
  templateUrl: './access-list-example.component.html',
  styleUrls: ['./access-list-example.component.scss']
})
export class AccessListExampleComponent {
  public exampleAccessListHtml = ACCESS_LIST_EXAMPLE_HTML;

  public exampleAccessListTs = ACCESS_LIST_EXAMPLE_TS;
  public exampleAccessListAccessTs = ACCESS_LIST_EXAMPLE_ACCESS_TS;
  public exampleAccessListCategoryTs = ACCESS_LIST_EXAMPLE_CATEGORY_TS;

  public accesListArray = ACCESS_LIST_ACCESS;
  public accesListArrayCategory = ACCESS_LIST_CATEGORY;
  public accesListArrayFooter = ACCESS_LIST_FOOTER;
}
