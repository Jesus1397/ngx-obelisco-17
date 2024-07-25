import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OModalComponent } from './o-modal.component';

describe('OModalComponent', () => {
  let component: OModalComponent;
  let fixture: ComponentFixture<OModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
