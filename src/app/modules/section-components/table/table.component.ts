import { Component } from '@angular/core';
import { TABLE_NAVIGATION } from 'src/app/constants/table.constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public navigation = TABLE_NAVIGATION;
}
