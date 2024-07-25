import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectionExamplesComponent } from './dropdown-selection-examples.component';

describe('DropdownSelectionExamplesComponent', () => {
  let component: DropdownSelectionExamplesComponent;
  let fixture: ComponentFixture<DropdownSelectionExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownSelectionExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownSelectionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
