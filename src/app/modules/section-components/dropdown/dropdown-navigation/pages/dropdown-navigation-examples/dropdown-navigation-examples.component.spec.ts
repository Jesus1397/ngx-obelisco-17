import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNavigationExamplesComponent } from './dropdown-navigation-examples.component';

describe('DropdownNavigationExamplesComponent', () => {
  let component: DropdownNavigationExamplesComponent;
  let fixture: ComponentFixture<DropdownNavigationExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownNavigationExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownNavigationExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
