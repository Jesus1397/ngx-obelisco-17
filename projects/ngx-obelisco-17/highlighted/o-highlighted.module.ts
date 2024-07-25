import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OHighlightedComponent } from './o-highlighted.component';
import { OHighlightedTitleComponent } from './o-highlighted-title/o-highlighted-title.component';
import { OHighlightedFooterComponent } from './o-highlighted-footer/o-highlighted-footer.component';
import { OHighlightedDescriptionComponent } from './o-highlighted-description/o-highlighted-description.component';
import { OHighlightedHeaderComponent } from './o-highlighted-header/o-highlighted-header.component';
import { OHighlightedContentComponent } from './o-highlighted-content/o-highlighted-content.component';
import { OHighlightedImageComponent } from './o-highlighted-image/o-highlighted-image.component';
import { OHighlightedVideoComponent } from './o-highlighted-video/o-highlighted-video.component';

@NgModule({
  declarations: [
    OHighlightedComponent,
    OHighlightedTitleComponent,
    OHighlightedFooterComponent,
    OHighlightedDescriptionComponent,
    OHighlightedHeaderComponent,
    OHighlightedContentComponent,
    OHighlightedImageComponent,
    OHighlightedVideoComponent
  ],
  imports: [CommonModule],
  exports: [
    OHighlightedComponent,
    OHighlightedTitleComponent,
    OHighlightedFooterComponent,
    OHighlightedDescriptionComponent,
    OHighlightedHeaderComponent,
    OHighlightedContentComponent,
    OHighlightedImageComponent,
    OHighlightedVideoComponent
  ]
})
export class OHighlightedModule {}
