import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchExamplesComponent } from './switch-examples.component';

describe('SwitchExamplesComponent', () => {
  let component: SwitchExamplesComponent;
  let fixture: ComponentFixture<SwitchExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
