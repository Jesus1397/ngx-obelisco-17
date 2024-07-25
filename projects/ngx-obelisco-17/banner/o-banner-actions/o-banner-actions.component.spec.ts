import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBannerActionsComponent } from './o-banner-actions.component';

describe('OBannerActionsComponent', () => {
  let component: OBannerActionsComponent;
  let fixture: ComponentFixture<OBannerActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBannerActionsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBannerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
