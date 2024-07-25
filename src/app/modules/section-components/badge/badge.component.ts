import { Component } from '@angular/core';
import { BADGE_NAVIGATION } from 'src/app/constants/badge.constants';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  public badgeNavigation = BADGE_NAVIGATION;
}
