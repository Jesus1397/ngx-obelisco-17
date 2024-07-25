import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardTitleComponent } from './o-card-title.component';

describe('OCardTitleComponent', () => {
  let component: OCardTitleComponent;
  let fixture: ComponentFixture<OCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardTitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
