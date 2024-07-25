import { Component, Inject, OnInit } from '@angular/core';
import { StepService } from 'ngx-obelisco-17/core/services';
import {
  PROGRESS_BAR_EXAMPLE_DIRECTIVE,
  PROGRESS_BAR_EXAMPLE_FUNCIONALITY_HTML,
  PROGRESS_BAR_EXAMPLE_NO_STEPS,
  PROGRESS_BAR_EXAMPLE_FUNCIONALITY_TS,
} from 'src/app/constants/progress-bar.constants';

@Component({
  selector: 'app-progress-bar-examples',
  templateUrl: './progress-bar-examples.component.html',
  styleUrls: ['./progress-bar-examples.component.scss'],
})
export class ProgressBarExamplesComponent implements OnInit {
  public exampleButtons = PROGRESS_BAR_EXAMPLE_DIRECTIVE;
  public exampleFuncionalityHTML = PROGRESS_BAR_EXAMPLE_FUNCIONALITY_HTML;
  public exampleFuncionalityTS = PROGRESS_BAR_EXAMPLE_FUNCIONALITY_TS;
  public exampleNoSteps = PROGRESS_BAR_EXAMPLE_NO_STEPS;

  constructor(
    @Inject(StepService) private readonly progressBarService: StepService
  ) {}

  public ngOnInit(): void {
    this.progressBarService.initialize();
  }

  public nextStep(): void {
    this.progressBarService.next();
  }

  public previousStep(): void {
    this.progressBarService.previous();
  }

  public stopProgress(event: boolean): void {
    if (event) {
      console.log('Completado');
    }
  }
}
