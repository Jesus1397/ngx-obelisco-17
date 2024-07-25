import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardImageComponent } from './o-card-image.component';

describe('OCardImageComponent', () => {
  let component: OCardImageComponent;
  let fixture: ComponentFixture<OCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardImageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
