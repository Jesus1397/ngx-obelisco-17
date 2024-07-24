import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { StepService } from '@gcba/ngx-obelisco/core/services';

@Directive({
  selector: '[oStepPrevious]',
  standalone: true
})
export class StepPreviousDirective implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  constructor(
    private readonly stepService: StepService,
    private readonly element: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.stepService.initialize();
  }

  public ngOnInit(): void {
    this.renderer.setProperty(this.element.nativeElement, 'disabled', true);

    this.stepService.isFirstStep.pipe(takeUntil(this.onDestroy$)).subscribe((event) => {
      this.renderer.setProperty(this.element.nativeElement, 'disabled', event);
    });

    this.stepService.stopEmmiter.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
      this.stepService.stop();
    });
  }

  @HostListener('click') public onClick(): void {
    this.stepService.previous();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
