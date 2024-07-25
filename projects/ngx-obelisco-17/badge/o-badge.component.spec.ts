import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBadgeComponent } from './o-badge.component';

describe('BadgeComponent', () => {
  let component: OBadgeComponent;
  let fixture: ComponentFixture<OBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBadgeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
