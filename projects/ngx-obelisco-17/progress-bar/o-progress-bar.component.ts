import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AbstractStep } from 'ngx-obelisco-17/core/abstracts';
import { ProgressBarTypes } from 'ngx-obelisco-17/core/models';
import { StepService } from 'ngx-obelisco-17/core/services';

const MAX_WIDTH: number = 100;
const INICIAL_STEP: number = 0;

@Component({
  selector: 'o-progress-bar',
  templateUrl: './o-progress-bar.component.html',
  styleUrls: ['./o-progress-bar.component.scss'],
})
export class OProgressBarComponent
  extends AbstractStep
  implements OnInit, OnDestroy
{
  public percentage: number = 0;
  public aux: number = 0;

  @Input() public description!: string;
  @Input() public type: ProgressBarTypes = 'info';
  @Input() public currentStep: number = 0;
  @Input() public totalSteps: number = 10;
  @Input() public customClasses: string = '';

  @Output() public override stopSteps = new EventEmitter<boolean>();

  private onDestroy$ = new Subject<void>();

  constructor(private readonly progressBarService: StepService) {
    super(progressBarService);
  }

  public ngOnInit(): void {
    this.progressBarService.getNext
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.nextStep();
      });
    this.progressBarService.getPrevious
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.previousStep();
      });
    this.aux = MAX_WIDTH / this.totalSteps;
    for (let i = 0; i < this.currentStep; i++) {
      this.percentage += this.aux;
    }
  }

  public previousStep(): void {
    this.setpsService.isFirstStep.emit(false);

    if (this.currentStep > INICIAL_STEP) {
      this.percentage -= this.aux;
      this.currentStep--;
    }

    if (this.currentStep === 0) {
      this.setpsService.isFirstStep.emit(true);
      return;
    }
  }

  public nextStep(): void {
    this.setpsService.isFirstStep.emit(false);
    if (this.currentStep < this.totalSteps) {
      this.percentage += this.aux;
      this.currentStep++;
    }
    if (this.currentStep === this.totalSteps) {
      this.stopSteps.emit(true);
      this.setpsService.stopEmmiter.emit(true);
      this.progressBarService.stop();
    }
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
