import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBannerComponent } from './o-banner.component';

describe('OBannerComponent', () => {
  let component: OBannerComponent;
  let fixture: ComponentFixture<OBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBannerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
