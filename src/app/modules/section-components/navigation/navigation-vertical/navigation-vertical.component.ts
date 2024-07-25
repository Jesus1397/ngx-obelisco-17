import { Component } from '@angular/core';
import { NAVIGATION_VERTICAL } from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-navigation-vertical',
  templateUrl: './navigation-vertical.component.html',
  styleUrls: ['./navigation-vertical.component.scss']
})
export class NavigationVerticalComponent {
  public navigation = NAVIGATION_VERTICAL;
}
