import { Component } from '@angular/core';
import { SEARCH_NAVIGATION } from 'src/app/constants/search.constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public navigation = SEARCH_NAVIGATION;
}
