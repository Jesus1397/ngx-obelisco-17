import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelExamplesComponent } from './panel-examples.component';

describe('PanelExamplesComponent', () => {
  let component: PanelExamplesComponent;
  let fixture: ComponentFixture<PanelExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
