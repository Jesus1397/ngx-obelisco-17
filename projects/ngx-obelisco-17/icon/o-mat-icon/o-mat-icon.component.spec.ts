import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMatIconComponent } from './o-mat-icon.component';

describe('OMatIconComponent', () => {
  let component: OMatIconComponent;
  let fixture: ComponentFixture<OMatIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OMatIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OMatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
