import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseTextComponent } from './o-collapse-text.component';

describe('OCollapseTextComponent', () => {
  let component: OCollapseTextComponent;
  let fixture: ComponentFixture<OCollapseTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseTextComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
