import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterExamplesComponent } from './footer-examples.component';

describe('FooterExamplesComponent', () => {
  let component: FooterExamplesComponent;
  let fixture: ComponentFixture<FooterExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
