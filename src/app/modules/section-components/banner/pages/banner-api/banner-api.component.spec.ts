import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerApiComponent } from './banner-api.component';

describe('BannerApiComponent', () => {
  let component: BannerApiComponent;
  let fixture: ComponentFixture<BannerApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BannerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
