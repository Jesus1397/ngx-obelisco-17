import { Component } from '@angular/core';
import { COLLAPSE_NAVIGATION } from 'src/app/constants/collapse.constants';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {
  public navigation = COLLAPSE_NAVIGATION;
}
