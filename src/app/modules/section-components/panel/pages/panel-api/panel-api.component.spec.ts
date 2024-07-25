import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelApiComponent } from './panel-api.component';

describe('PanelApiComponent', () => {
  let component: PanelApiComponent;
  let fixture: ComponentFixture<PanelApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
