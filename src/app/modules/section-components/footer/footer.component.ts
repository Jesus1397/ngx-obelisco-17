import { Component } from '@angular/core';
import { FOOTER_NAVIGATION } from './../../../constants/footer.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public footerNavigation = FOOTER_NAVIGATION;
}
