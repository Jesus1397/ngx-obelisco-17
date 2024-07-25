import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAlertComponent } from './o-alert.component';

describe('OAlertComponent', () => {
  let component: OAlertComponent;
  let fixture: ComponentFixture<OAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OAlertComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
