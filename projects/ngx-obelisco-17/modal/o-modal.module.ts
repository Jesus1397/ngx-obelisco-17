import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OModalComponent } from './o-modal.component';
import { OModalContentComponent } from './o-modal-content/o-modal-content.component';
import { OModalHeaderComponent } from './o-modal-header/o-modal-header.component';
import { OModalTitleComponent } from './o-modal-title/o-modal-title.component';
import { OModalFooterComponent } from './o-modal-footer/o-modal-footer.component';

@NgModule({
  declarations: [
    OModalComponent,
    OModalContentComponent,
    OModalHeaderComponent,
    OModalTitleComponent,
    OModalFooterComponent
  ],
  imports: [CommonModule],
  exports: [OModalComponent, OModalContentComponent, OModalHeaderComponent, OModalTitleComponent, OModalFooterComponent]
})
export class OModalModule {}
