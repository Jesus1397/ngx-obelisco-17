import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  SEARCHBAR_ITEM_DATA_SOURCE,
  SEARCHITEM_INTERFACE,
  SEARCH_DATA_SOURCE
} from 'src/app/constants/search.constants';

@Component({
  selector: 'app-search-api',
  templateUrl: './search-api.component.html',
  styleUrls: ['./search-api.component.scss']
})
export class SearchApiComponent {
  public dataSource = SEARCH_DATA_SOURCE;
  public columns = COLUMNS;

  public searchItemInterface = SEARCHITEM_INTERFACE;
  public searchItemDataSource = SEARCHBAR_ITEM_DATA_SOURCE;
}
