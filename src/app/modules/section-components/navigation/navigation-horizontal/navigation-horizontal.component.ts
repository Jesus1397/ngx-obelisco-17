import { Component } from '@angular/core';
import { NAVIGATION_HORIZONTAL } from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-navigation-horizontal',
  templateUrl: './navigation-horizontal.component.html',
  styleUrls: ['./navigation-horizontal.component.scss']
})
export class NavigationHorizontalComponent {
  public navigation = NAVIGATION_HORIZONTAL;
}
