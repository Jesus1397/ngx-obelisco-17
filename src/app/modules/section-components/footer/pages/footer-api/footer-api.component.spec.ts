import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterApiComponent } from './footer-api.component';

describe('FooterApiComponent', () => {
  let component: FooterApiComponent;
  let fixture: ComponentFixture<FooterApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
