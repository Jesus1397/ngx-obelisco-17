import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTabsApiComponent } from './navigation-tabs-api.component';

describe('NavigationTabsApiComponent', () => {
  let component: NavigationTabsApiComponent;
  let fixture: ComponentFixture<NavigationTabsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationTabsApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationTabsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
