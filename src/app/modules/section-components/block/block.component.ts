import { Component } from '@angular/core';
import { BLOCK_NAVIGATION } from 'src/app/constants/block.constants';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {
  public blockNavigation = BLOCK_NAVIGATION;
}
