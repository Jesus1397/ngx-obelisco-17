import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHorizontalApiComponent } from './navigation-horizontal-api.component';

describe('NavigationHorizontalApiComponent', () => {
  let component: NavigationHorizontalApiComponent;
  let fixture: ComponentFixture<NavigationHorizontalApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationHorizontalApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationHorizontalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
