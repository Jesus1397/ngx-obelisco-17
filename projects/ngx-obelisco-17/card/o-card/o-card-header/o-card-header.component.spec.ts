import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardHeaderComponent } from './o-card-header.component';

describe('OCardHeaderComponent', () => {
  let component: OCardHeaderComponent;
  let fixture: ComponentFixture<OCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
