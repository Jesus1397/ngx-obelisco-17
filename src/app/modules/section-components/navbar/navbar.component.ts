import { Component } from '@angular/core';
import { NAVBAR_NAVIGATION } from 'src/app/constants/navbar.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public navigation = NAVBAR_NAVIGATION;
}
