import { Component } from '@angular/core';
import { BADGE_TYPES_EXAMPLES, BADGE_TYPES_LINKS } from 'src/app/constants/badge.constants';

@Component({
  selector: 'app-badge-examples',
  templateUrl: './badge-examples.component.html',
  styleUrls: ['./badge-examples.component.scss']
})
export class BadgeExamplesComponent {
  public badgeTypes = BADGE_TYPES_EXAMPLES;
  public badgeLink = BADGE_TYPES_LINKS;
}
