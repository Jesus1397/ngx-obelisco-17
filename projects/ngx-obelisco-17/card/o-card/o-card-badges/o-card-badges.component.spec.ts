import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardBadgesComponent } from './o-card-badges.component';

describe('OCardBadgesComponent', () => {
  let component: OCardBadgesComponent;
  let fixture: ComponentFixture<OCardBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardBadgesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
