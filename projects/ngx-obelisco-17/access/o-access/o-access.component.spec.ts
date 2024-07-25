import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAccessComponent } from './o-access.component';

describe('OAccessComponent', () => {
  let component: OAccessComponent;
  let fixture: ComponentFixture<OAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OAccessComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
