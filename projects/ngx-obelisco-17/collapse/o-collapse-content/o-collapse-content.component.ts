import { AfterContentInit, Component, ContentChild, Input, Optional } from '@angular/core';
import { OCollapseComponent } from '../o-collapse.component';
import { OCollapseInputComponent } from '../o-collapse-input/o-collapse-input.component';

@Component({
  selector: 'o-collapse-content',
  templateUrl: './o-collapse-content.component.html',
  styleUrls: ['./o-collapse-content.component.scss']
})
export class OCollapseContentComponent implements AfterContentInit {
  constructor(@Optional() private oCollapse: OCollapseComponent) {}
  @Input() public customClasses?: string;

  @ContentChild(OCollapseInputComponent, { static: true }) inputComponent?: OCollapseInputComponent;

  public identifierContent: string | undefined;
  public dataParentContent: string | undefined;

  ngAfterContentInit() {
    if (this.oCollapse) {
      this.identifierContent = this.oCollapse.identifier;
      this.dataParentContent = this.oCollapse.dataParent;
    }
  }
}
