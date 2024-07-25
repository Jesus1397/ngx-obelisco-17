import { Component } from '@angular/core';
import { TABS_NAVIGATION } from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  public navigation = TABS_NAVIGATION;
}
