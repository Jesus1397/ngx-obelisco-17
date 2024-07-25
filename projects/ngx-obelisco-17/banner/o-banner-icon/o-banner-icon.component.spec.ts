import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBannerIconComponent } from './o-banner-icon.component';

describe('OBannerIconComponent', () => {
  let component: OBannerIconComponent;
  let fixture: ComponentFixture<OBannerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBannerIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBannerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
