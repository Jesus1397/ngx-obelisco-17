import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerExamplesComponent } from './banner-examples.component';

describe('BannerExamplesComponent', () => {
  let component: BannerExamplesComponent;
  let fixture: ComponentFixture<BannerExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BannerExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
