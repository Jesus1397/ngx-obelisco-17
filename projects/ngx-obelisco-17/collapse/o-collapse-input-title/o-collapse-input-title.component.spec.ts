import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseInputTitleComponent } from './o-collapse-input-title.component';

describe('OCollapseInputTitleComponent', () => {
  let component: OCollapseInputTitleComponent;
  let fixture: ComponentFixture<OCollapseInputTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseInputTitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseInputTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
