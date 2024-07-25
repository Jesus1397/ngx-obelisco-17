import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHorizontalExamplesComponent } from './navigation-horizontal-examples.component';

describe('NavigationHorizontalExamplesComponent', () => {
  let component: NavigationHorizontalExamplesComponent;
  let fixture: ComponentFixture<NavigationHorizontalExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationHorizontalExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationHorizontalExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
