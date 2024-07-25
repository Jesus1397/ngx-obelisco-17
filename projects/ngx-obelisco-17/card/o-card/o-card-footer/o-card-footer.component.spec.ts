import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardFooterComponent } from './o-card-footer.component';

describe('OCardFooterComponent', () => {
  let component: OCardFooterComponent;
  let fixture: ComponentFixture<OCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
