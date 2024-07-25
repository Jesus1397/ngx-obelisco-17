import { Component } from '@angular/core';
import { BANNER_NAVIGATION } from 'src/app/constants/banner.constants';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  public bannerNavigation = BANNER_NAVIGATION;
}
