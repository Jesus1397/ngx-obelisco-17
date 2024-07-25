import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNavigationApiComponent } from './dropdown-navigation-api.component';

describe('DropdownNavigationApiComponent', () => {
  let component: DropdownNavigationApiComponent;
  let fixture: ComponentFixture<DropdownNavigationApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownNavigationApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownNavigationApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
