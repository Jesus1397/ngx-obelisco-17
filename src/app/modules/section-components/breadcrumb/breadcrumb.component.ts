import { Component } from '@angular/core';
import { BREADCRUMB_NAVIGATION } from '../../../constants/breadcrumb.constants';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  public breadcrumbNavigation = BREADCRUMB_NAVIGATION;
}
