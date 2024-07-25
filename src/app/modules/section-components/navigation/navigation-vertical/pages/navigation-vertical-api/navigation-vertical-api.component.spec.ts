import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationVerticalApiComponent } from './navigation-vertical-api.component';

describe('NavigationVerticalApiComponent', () => {
  let component: NavigationVerticalApiComponent;
  let fixture: ComponentFixture<NavigationVerticalApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationVerticalApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationVerticalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
