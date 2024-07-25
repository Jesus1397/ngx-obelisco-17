import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectionComponent } from './dropdown-selection.component';

describe('DropdownSelectionComponent', () => {
  let component: DropdownSelectionComponent;
  let fixture: ComponentFixture<DropdownSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownSelectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
