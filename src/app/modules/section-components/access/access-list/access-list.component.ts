import { Component } from '@angular/core';
import { ACCESS_LIST } from 'src/app/constants/access.constants';

@Component({
  selector: 'app-access-list',
  templateUrl: './access-list.component.html',
  styleUrls: ['./access-list.component.scss']
})
export class AccessListComponent {
  public accessListNavigation = ACCESS_LIST;
}
