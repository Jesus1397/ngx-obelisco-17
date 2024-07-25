import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardComponent } from './o-card.component';

describe('OCardComponent', () => {
  let component: OCardComponent;
  let fixture: ComponentFixture<OCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
