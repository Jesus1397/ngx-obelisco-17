import { Component } from '@angular/core';
import { SPINNER_NAVIGATION } from 'src/app/constants/spinner.constants';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  public spinner = SPINNER_NAVIGATION;
}
