import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OProgressBarComponent } from './o-progress-bar.component';

describe('OProgressbarComponent', () => {
  let component: OProgressBarComponent;
  let fixture: ComponentFixture<OProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OProgressBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
