import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTabsExamplesComponent } from './navigation-tabs-examples.component';

describe('NavigationTabsExamplesComponent', () => {
  let component: NavigationTabsExamplesComponent;
  let fixture: ComponentFixture<NavigationTabsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationTabsExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationTabsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
