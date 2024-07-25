import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectionApiComponent } from './dropdown-selection-api.component';

describe('DropdownSelectionApiComponent', () => {
  let component: DropdownSelectionApiComponent;
  let fixture: ComponentFixture<DropdownSelectionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownSelectionApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownSelectionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
