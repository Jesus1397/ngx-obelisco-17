import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPanelSmallComponent } from './o-panel-small.component';

describe('OPanelSmallComponent', () => {
  let component: OPanelSmallComponent;
  let fixture: ComponentFixture<OPanelSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OPanelSmallComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OPanelSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
