import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OBannerComponent } from './o-banner.component';
import { OBannerIconComponent } from './o-banner-icon/o-banner-icon.component';
import { OBannerActionsComponent } from './o-banner-actions/o-banner-actions.component';
import { OBannerTextComponent } from './o-banner-text/o-banner-text.component';

@NgModule({
  declarations: [OBannerComponent, OBannerIconComponent, OBannerActionsComponent, OBannerTextComponent],
  imports: [CommonModule],
  exports: [OBannerComponent, OBannerIconComponent, OBannerActionsComponent, OBannerTextComponent]
})
export class OBannerModule {}
