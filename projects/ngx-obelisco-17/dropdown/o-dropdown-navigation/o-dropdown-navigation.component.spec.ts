import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODropdownNavigationComponent } from './o-dropdown-navigation.component';

describe('ODropdownNavigationComponent', () => {
  let component: ODropdownNavigationComponent;
  let fixture: ComponentFixture<ODropdownNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ODropdownNavigationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ODropdownNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
