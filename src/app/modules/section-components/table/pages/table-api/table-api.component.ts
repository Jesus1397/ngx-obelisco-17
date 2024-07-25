import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  TABLA_COLUMN_INTERFACE,
  TABLA_DATASOURCE_INTERFACE,
  TABLA_INTERFACE_COLUMN,
  TABLA_INTERFACE_DATASOURCE,
  TABLA_INTERFACE_TABLECHECKBOX,
  TABLA_TABLECHECKBOX_INTERFACE,
  TABLE_DATA_SOURCE,
  TABLE_DATA_SOURCE_METHODS
} from 'src/app/constants/table.constants';

@Component({
  selector: 'app-table-api',
  templateUrl: './table-api.component.html',
  styleUrls: ['./table-api.component.scss']
})
export class TableApiComponent {
  public dataSource = TABLE_DATA_SOURCE;
  public columns = COLUMNS;

  public dataSourceMethods = TABLE_DATA_SOURCE_METHODS;
  public dsColumnInterface = TABLA_COLUMN_INTERFACE;
  public dsDataSourceInterface = TABLA_DATASOURCE_INTERFACE;
  public dsTableCheckboxInterface = TABLA_TABLECHECKBOX_INTERFACE;

  public exampleColumnInterface = TABLA_INTERFACE_COLUMN;
  public exampleDataSourceInterface = TABLA_INTERFACE_DATASOURCE;
  public exampleTableCheckboxInterface = TABLA_INTERFACE_TABLECHECKBOX;
}
