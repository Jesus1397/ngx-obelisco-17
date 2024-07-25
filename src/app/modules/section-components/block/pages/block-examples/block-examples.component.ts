import { Component, OnInit, Inject } from '@angular/core';
import { StepService } from 'ngx-obelisco-17/core/services';
import {
  BLOCK_EXAMPLE_BACKGROUND,
  BLOCK_EXAMPLE_DESCRIPTION,
  BLOCK_EXAMPLE_PROGRESS_BAR,
  BLOCK_EXAMPLE_TITLE,
} from 'src/app/constants/block.constants';

@Component({
  selector: 'app-block-examples',
  templateUrl: './block-examples.component.html',
  styleUrls: ['./block-examples.component.scss'],
})
export class BlockExamplesComponent implements OnInit {
  public blockTitle = BLOCK_EXAMPLE_TITLE;
  public blockDescription = BLOCK_EXAMPLE_DESCRIPTION;
  public blockProgressBar = BLOCK_EXAMPLE_PROGRESS_BAR;
  public blockBg = BLOCK_EXAMPLE_BACKGROUND;

  constructor(
    @Inject(StepService) private readonly progressBarService: StepService
  ) {}

  public ngOnInit(): void {
    this.progressBarService.initialize();
  }
}
