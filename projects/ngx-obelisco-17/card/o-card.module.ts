import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { OCardComponent } from './o-card/o-card.component';
import { OCardTitleComponent } from './o-card/o-card-title/o-card-title.component';
import { OCardContentComponent } from './o-card/o-card-content/o-card-content.component';
import { OCardDescriptionComponent } from './o-card/o-card-description/o-card-description.component';
import { OCardIconComponent } from './o-card/o-card-icon/o-card-icon.component';
import { OCardImageComponent } from './o-card/o-card-image/o-card-image.component';
import { OCardFooterComponent } from './o-card/o-card-footer/o-card-footer.component';
import { OCardBadgesComponent } from './o-card/o-card-badges/o-card-badges.component';
import { OCardHeadlineComponent } from './o-card/o-card-headline/o-card-headline.component';
import { OCardHeaderComponent } from './o-card/o-card-header/o-card-header.component';
import { ODefaultImageDirective } from 'ngx-obelisco-17/directives';
import { OBadgeModule } from 'ngx-obelisco-17/badge';

@NgModule({
  declarations: [
    OCardComponent,
    OCardTitleComponent,
    OCardContentComponent,
    OCardDescriptionComponent,
    OCardIconComponent,
    OCardImageComponent,
    OCardFooterComponent,
    OCardBadgesComponent,
    OCardHeadlineComponent,
    OCardHeaderComponent,
  ],
  imports: [CommonModule, RouterModule, ODefaultImageDirective, OBadgeModule],
  exports: [
    OCardComponent,
    OCardTitleComponent,
    OCardContentComponent,
    OCardDescriptionComponent,
    OCardIconComponent,
    OCardImageComponent,
    OCardFooterComponent,
    OCardBadgesComponent,
    OCardHeadlineComponent,
    OCardHeaderComponent,
  ],
})
export class OCardModule {}
