import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBxIconComponent } from './o-bx-icon.component';

describe('OBxIconComponent', () => {
  let component: OBxIconComponent;
  let fixture: ComponentFixture<OBxIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBxIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBxIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
