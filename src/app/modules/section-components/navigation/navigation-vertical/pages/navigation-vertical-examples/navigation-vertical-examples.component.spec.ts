import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationVerticalExamplesComponent } from './navigation-vertical-examples.component';

describe('NavigationVerticalExamplesComponent', () => {
  let component: NavigationVerticalExamplesComponent;
  let fixture: ComponentFixture<NavigationVerticalExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationVerticalExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationVerticalExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
