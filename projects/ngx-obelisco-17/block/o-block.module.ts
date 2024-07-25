import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OBlockComponent } from './o-block.component';
import { OBlockFooterComponent } from './o-block-footer/o-block-footer.component';
import { OBlockTitleComponent } from './o-block-title/o-block-title.component';
import { OBlockHeaderComponent } from './o-block-header/o-block-header.component';
import { OBlockTextComponent } from './o-block-text/o-block-text.component';

@NgModule({
  declarations: [
    OBlockComponent,
    OBlockFooterComponent,
    OBlockTitleComponent,
    OBlockHeaderComponent,
    OBlockTextComponent
  ],
  imports: [CommonModule],
  exports: [OBlockComponent, OBlockFooterComponent, OBlockTitleComponent, OBlockHeaderComponent, OBlockTextComponent]
})
export class OBlockModule {}
