import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardContentComponent } from './o-card-content.component';

describe('OCardContentComponent', () => {
  let component: OCardContentComponent;
  let fixture: ComponentFixture<OCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
