import { Component } from '@angular/core';
import { PROGRESS_BAR_NAVIGATION } from '../../../constants/progress-bar.constants';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  public progressBarNavigation = PROGRESS_BAR_NAVIGATION;
}
