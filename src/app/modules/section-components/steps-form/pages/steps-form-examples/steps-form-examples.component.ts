import { Component, Inject, OnInit } from '@angular/core';
import { StepService } from 'ngx-obelisco-17/core/services';
import {
  STEPS_FORM_EXAMPLE_DIRECTIVE_HTML,
  STEPS_FORM_EXAMPLE_DIRECTIVE_TS,
  STEPS_FORM_EXAMPLE_FUNCTIONALITY_HTML,
  STEPS_FORM_EXAMPLE_FUNCTIONALITY_TS,
} from 'src/app/constants/steps-form.constants';

@Component({
  selector: 'app-steps-form-examples',
  templateUrl: './steps-form-examples.component.html',
  styleUrls: ['./steps-form-examples.component.scss'],
})
export class StepsFormExamplesComponent implements OnInit {
  public exmapleDirectiveHTML = STEPS_FORM_EXAMPLE_DIRECTIVE_HTML;
  public exmapleDirectiveTS = STEPS_FORM_EXAMPLE_DIRECTIVE_TS;
  public exmapleFunctionalityHTML = STEPS_FORM_EXAMPLE_FUNCTIONALITY_HTML;
  public exmapleFunctionalityTS = STEPS_FORM_EXAMPLE_FUNCTIONALITY_TS;
  public actualStep!: any;
  public stepsForm: any[] = [];
  public steps: string[] = ['Paso 1', 'Paso 2', 'Paso 3'];

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

  constructor(
    @Inject(StepService) private readonly stepsFormService: StepService
  ) {}

  public ngOnInit(): void {
    this.stepsFormService.initialize();

    this.stepsForm = this.steps.map((step, index) => {
      return {
        name: step,
        active: index === 0,
      };
    });
    this.actualStep = this.stepsForm[0];
  }

  public nextStep(): void {
    this.stepsFormService.next();
  }

  public previousStep(): void {
    this.stepsFormService.previous();
  }

  public previousStepExample() {
    this.actualStep =
      this.stepsForm[this.stepsForm.indexOf(this.actualStep) - 1];
    this.stepsForm[this.currentStepNumber].active = false;

    if (this.currentStepNumber === 1) {
      return;
    }
  }
  public nextStepExample() {
    if (this.isLastStep) {
      return;
    }

    this.actualStep = this.stepsForm[this.currentStepNumber];
    this.actualStep.active = true;
  }

  public stopProgress(event: boolean): void {
    if (event) {
      console.log('Completado');
    }
  }
}
