import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardIconComponent } from './o-card-icon.component';

describe('OCardIconComponent', () => {
  let component: OCardIconComponent;
  let fixture: ComponentFixture<OCardIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
