import { AfterContentInit, Component, ContentChild, ElementRef, Input, Optional } from '@angular/core';
import { OCollapseTitleComponent } from '../o-collapse-title/o-collapse-title.component';
import { OCollapseComponent } from '../o-collapse.component';
import { OCollapseSubtitleComponent } from '../o-collapse-subtitle/o-collapse-subtitle.component';
import { OCollapseLabelComponent } from '../o-collapse-label/o-collapse-label.component';
import { OCollapseIconComponent } from '../o-collapse-icon/o-collapse-icon.component';

@Component({
  selector: 'o-collapse-header',
  templateUrl: './o-collapse-header.component.html',
  styleUrls: ['./o-collapse-header.component.scss']
})
export class OCollapseHeaderComponent implements AfterContentInit {
  @Input() public customClasses?: string;

  @ContentChild(OCollapseTitleComponent, { static: true }) titleComponent?: OCollapseTitleComponent;
  @ContentChild(OCollapseSubtitleComponent, { static: true }) subtitleComponent?: OCollapseTitleComponent;
  @ContentChild(OCollapseLabelComponent, { static: true }) labelComponent?: OCollapseTitleComponent;
  @ContentChild(OCollapseIconComponent, { static: true }) iconComponent?: OCollapseTitleComponent;

  public identifierHeader: string | undefined;

  constructor(@Optional() private oCollapse: OCollapseComponent) {}

  ngAfterContentInit() {
    if (this.oCollapse) {
      this.identifierHeader = this.oCollapse.identifier;
    }
  }
}
