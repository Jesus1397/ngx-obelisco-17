import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseInputComponent } from './o-collapse-input.component';

describe('OCollapseInputComponent', () => {
  let component: OCollapseInputComponent;
  let fixture: ComponentFixture<OCollapseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
