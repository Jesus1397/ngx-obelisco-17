import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMapDescriptionComponent } from './o-map-description.component';

describe('OMapDescriptionComponent', () => {
  let component: OMapDescriptionComponent;
  let fixture: ComponentFixture<OMapDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OMapDescriptionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OMapDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
