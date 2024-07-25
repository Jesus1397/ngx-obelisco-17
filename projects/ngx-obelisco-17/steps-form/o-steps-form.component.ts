import { CommonModule } from '@angular/common';
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
import { StepForm } from 'ngx-obelisco-17/core/models';
import { StepService } from 'ngx-obelisco-17/core/services';

@Component({
  selector: 'o-steps-form',
  templateUrl: './o-steps-form.component.html',
  styleUrls: ['./o-steps-form.component.scss'],
})
export class OStepsFormComponent
  extends AbstractStep
  implements OnInit, OnDestroy
{
  public actualStep!: StepForm;
  public stepsForm: StepForm[] = [];

  @Input() public steps: string[] = [];
  @Input() public customClasses: string = '';

  @Output() public override stopSteps = new EventEmitter<boolean>();

  private onDestroy$ = new Subject<void>();

  get isLastStep(): boolean {
    return (
      this.stepsForm.indexOf(this.actualStep) === this.stepsForm.length - 1
    );
  }

  get nextStepName(): string {
    const index = this.stepsForm.indexOf(this.actualStep);
    return this.stepsForm[index + 1].name;
  }

  get currentStepNumber(): number {
    return this.stepsForm.indexOf(this.actualStep) + 1;
  }

  constructor(protected override readonly setpsService: StepService) {
    super(setpsService);
  }

  public ngOnInit(): void {
    this.setpsService.getNext.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
      this.nextStep();
    });

    this.setpsService.getPrevious
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.previousStep();
      });

    this.stepsForm = this.steps.map((step, index) => {
      return {
        name: step,
        active: index === 0,
      };
    });
    this.actualStep = this.stepsForm[0];
  }

  public previousStep(): void {
    this.setpsService.isFirstStep.emit(false);

    if (this.currentStepNumber === 1) {
      this.setpsService.isFirstStep.emit(true);
      return;
    }

    this.actualStep =
      this.stepsForm[this.stepsForm.indexOf(this.actualStep) - 1];
    this.stepsForm[this.currentStepNumber].active = false;
  }

  public nextStep(): void {
    this.setpsService.isFirstStep.emit(false);

    if (this.isLastStep) {
      this.setpsService.stopEmmiter.emit(true);
      this.stopSteps.emit(true);
      this.setpsService.stop();
      return;
    }

    this.actualStep = this.stepsForm[this.currentStepNumber];
    this.actualStep.active = true;
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
