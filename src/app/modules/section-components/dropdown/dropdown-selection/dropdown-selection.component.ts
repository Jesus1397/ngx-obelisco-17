import { Component } from '@angular/core';
import { DROPDOWN_SELECTION } from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-selection',
  templateUrl: './dropdown-selection.component.html',
  styleUrls: ['./dropdown-selection.component.scss']
})
export class DropdownSelectionComponent {
  public navigation = DROPDOWN_SELECTION;
}
