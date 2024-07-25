import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OCollapseComponent } from './o-collapse.component';
import { OCollapseHeaderComponent } from './o-collapse-header/o-collapse-header.component';
import { OCollapseTitleComponent } from './o-collapse-title/o-collapse-title.component';
import { OCollapseIconComponent } from './o-collapse-icon/o-collapse-icon.component';
import { OCollapseLabelComponent } from './o-collapse-label/o-collapse-label.component';
import { OCollapseSubtitleComponent } from './o-collapse-subtitle/o-collapse-subtitle.component';
import { OCollapseContentComponent } from './o-collapse-content/o-collapse-content.component';
import { OCollapseTextComponent } from './o-collapse-text/o-collapse-text.component';
import { OCollapseInputComponent } from './o-collapse-input/o-collapse-input.component';
import { OCollapseInputTitleComponent } from './o-collapse-input-title/o-collapse-input-title.component';
import { OCollapseInputSubtitleComponent } from './o-collapse-input-subtitle/o-collapse-input-subtitle.component';

@NgModule({
  declarations: [
    OCollapseComponent,
    OCollapseHeaderComponent,
    OCollapseTitleComponent,
    OCollapseIconComponent,
    OCollapseLabelComponent,
    OCollapseSubtitleComponent,
    OCollapseContentComponent,
    OCollapseTextComponent,
    OCollapseInputComponent,
    OCollapseInputTitleComponent,
    OCollapseInputSubtitleComponent
  ],
  imports: [CommonModule],
  exports: [
    OCollapseComponent,
    OCollapseHeaderComponent,
    OCollapseTitleComponent,
    OCollapseIconComponent,
    OCollapseLabelComponent,
    OCollapseSubtitleComponent,
    OCollapseContentComponent,
    OCollapseTextComponent,
    OCollapseInputComponent,
    OCollapseInputTitleComponent,
    OCollapseInputSubtitleComponent
  ]
})
export class OCollapseModule {}
