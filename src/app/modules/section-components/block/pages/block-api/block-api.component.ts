import { Component } from '@angular/core';
import { BLOCK_DATA_SOURCE, BLOCK_DATA_SOURCE_SECTIONS, BLOCK_SECTIONS } from 'src/app/constants/block.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-block-api',
  templateUrl: './block-api.component.html',
  styleUrls: ['./block-api.component.scss']
})
export class BlockApiComponent {
  public dataSource = BLOCK_DATA_SOURCE;
  public columns = COLUMNS;
  public dataSourceSections = BLOCK_DATA_SOURCE_SECTIONS;
  public blockSectionsHtml = BLOCK_SECTIONS;
}
