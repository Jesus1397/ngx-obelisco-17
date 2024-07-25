import { Component } from '@angular/core';
import { SPINNER_DATA_SOURCE, SPINNER_COLORS } from 'src/app/constants/spinner.constants';
import { COLUMNS, SIZES } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-spinner-api',
  templateUrl: './spinner-api.component.html',
  styleUrls: ['./spinner-api.component.scss']
})
export class SpinnerApiComponent {
  public dataSource = SPINNER_DATA_SOURCE;
  public columns = COLUMNS;
  public colors = SPINNER_COLORS;
  public sizes = SIZES;
}
