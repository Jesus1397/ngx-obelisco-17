import { Component, OnInit } from '@angular/core';

const MAX_WIDTH: number = 100;
const INICIAL_STEP: number = 0;

@Component({
  selector: 'app-progress-bar-demo',
  templateUrl: './progress-bar-demo.component.html',
  styleUrls: ['./progress-bar-demo.component.scss']
})
export class ProgressBarDemoComponent implements OnInit {
  public percentage: number = 0;
  public aux: number = 0;
  public currentStep: number = 4;
  public totalSteps: number = 8;

  public ngOnInit(): void {
    this.aux = MAX_WIDTH / this.totalSteps;
    for (let i = 0; i < this.currentStep; i++) {
      this.percentage += this.aux;
    }
  }
  public clickPrev(): void {
    if (this.currentStep > INICIAL_STEP) {
      this.percentage -= this.aux;
      this.currentStep--;
    }
  }
  public clickNext(): void {
    if (this.currentStep < this.totalSteps) {
      this.percentage += this.aux;
      this.currentStep++;
    }
  }
}
