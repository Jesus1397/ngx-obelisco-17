import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardHeadlineComponent } from './o-card-headline.component';

describe('OCardHeadlineComponent', () => {
  let component: OCardHeadlineComponent;
  let fixture: ComponentFixture<OCardHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardHeadlineComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
