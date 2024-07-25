import { Component } from '@angular/core';
import { ACCESS_SIMPLE } from '../../../../constants/access.constants';

@Component({
  selector: 'app-access-simple',
  templateUrl: './access-simple.component.html',
  styleUrls: ['./access-simple.component.scss']
})
export class AccessSimpleComponent {
  public accessSimpleNavigation = ACCESS_SIMPLE;
}
