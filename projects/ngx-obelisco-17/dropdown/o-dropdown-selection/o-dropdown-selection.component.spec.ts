import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODropdownSelectionComponent } from './o-dropdown-selection.component';

describe('ODropdownSelectionComponent', () => {
  let component: ODropdownSelectionComponent;
  let fixture: ComponentFixture<ODropdownSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ODropdownSelectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ODropdownSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
