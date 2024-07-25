import { Component } from '@angular/core';
import { DROPDOWN_NAVIGATION } from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-navigation',
  templateUrl: './dropdown-navigation.component.html',
  styleUrls: ['./dropdown-navigation.component.scss']
})
export class DropdownNavigationComponent {
  public navigation = DROPDOWN_NAVIGATION;
}
