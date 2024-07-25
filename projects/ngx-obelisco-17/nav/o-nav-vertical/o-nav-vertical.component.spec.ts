import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONavVerticalComponent } from './o-nav-vertical.component';

describe('ONavVerticalComponent', () => {
  let component: ONavVerticalComponent;
  let fixture: ComponentFixture<ONavVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ONavVerticalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ONavVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
