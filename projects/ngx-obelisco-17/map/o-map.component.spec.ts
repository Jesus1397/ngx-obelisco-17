import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMapComponent } from './o-map.component';

describe('OMapComponent', () => {
  let component: OMapComponent;
  let fixture: ComponentFixture<OMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OMapComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
