import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OButtonComponent } from './o-button.component';

describe('OButtonComponent', () => {
  let component: OButtonComponent;
  let fixture: ComponentFixture<OButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
