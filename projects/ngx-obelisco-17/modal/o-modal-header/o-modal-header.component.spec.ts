import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OModalHeaderComponent } from './o-modal-header.component';

describe('OModalHeaderComponent', () => {
  let component: OModalHeaderComponent;
  let fixture: ComponentFixture<OModalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OModalHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
