import { Component } from '@angular/core';
import { HIGHLIGHTED_NAVIGATION } from 'src/app/constants/highlighted.constants';

@Component({
  selector: 'app-highlighted',
  templateUrl: './highlighted.component.html',
  styleUrls: ['./highlighted.component.scss']
})
export class HighlightedComponent {
  public navigation = HIGHLIGHTED_NAVIGATION;
}
