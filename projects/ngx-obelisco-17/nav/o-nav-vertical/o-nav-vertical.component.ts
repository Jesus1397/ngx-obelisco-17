import { Component, Input } from '@angular/core';
import { NavVerticalItems } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-nav-vertical',
  templateUrl: './o-nav-vertical.component.html',
  styleUrls: ['./o-nav-vertical.component.scss'],
})
export class ONavVerticalComponent {
  @Input() public navVertItems: NavVerticalItems[] = [];
  @Input() public exactRouteActive: boolean = false;
  @Input() public customClasses: string = '';

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
