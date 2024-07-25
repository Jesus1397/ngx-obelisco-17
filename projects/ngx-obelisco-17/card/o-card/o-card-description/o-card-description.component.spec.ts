import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardDescriptionComponent } from './o-card-description.component';

describe('OCardDescriptionComponent', () => {
  let component: OCardDescriptionComponent;
  let fixture: ComponentFixture<OCardDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardDescriptionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
