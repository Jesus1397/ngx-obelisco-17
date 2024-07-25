import { Component } from '@angular/core';
import { CARD_NAVIGATION } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public navigation = CARD_NAVIGATION;
}
