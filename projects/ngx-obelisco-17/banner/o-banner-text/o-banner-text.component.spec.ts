import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBannerTextComponent } from './o-banner-text.component';

describe('OBannerTextComponent', () => {
  let component: OBannerTextComponent;
  let fixture: ComponentFixture<OBannerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBannerTextComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBannerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
