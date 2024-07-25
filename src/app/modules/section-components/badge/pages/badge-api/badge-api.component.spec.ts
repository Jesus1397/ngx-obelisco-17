import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeApiComponent } from './badge-api.component';

describe('BadgeApiComponent', () => {
  let component: BadgeApiComponent;
  let fixture: ComponentFixture<BadgeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgeApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
