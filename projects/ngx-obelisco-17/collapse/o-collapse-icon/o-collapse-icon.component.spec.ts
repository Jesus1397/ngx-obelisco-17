import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseIconComponent } from './o-collapse-icon.component';

describe('OCollapseIconComponent', () => {
  let component: OCollapseIconComponent;
  let fixture: ComponentFixture<OCollapseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
