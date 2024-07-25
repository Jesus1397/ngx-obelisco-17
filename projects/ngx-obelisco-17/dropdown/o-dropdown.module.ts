import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ODropdownNavigationComponent } from './o-dropdown-navigation/o-dropdown-navigation.component';
import { ODropdownSelectionComponent } from './o-dropdown-selection/o-dropdown-selection.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ODropdownNavigationComponent, ODropdownSelectionComponent],
  imports: [CommonModule, RouterModule],
  exports: [ODropdownNavigationComponent, ODropdownSelectionComponent]
})
export class ODropdownModule {}
