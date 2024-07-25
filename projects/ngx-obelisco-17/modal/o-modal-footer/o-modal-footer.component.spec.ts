import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OModalFooterComponent } from './o-modal-footer.component';

describe('OModalFooterComponent', () => {
  let component: OModalFooterComponent;
  let fixture: ComponentFixture<OModalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OModalFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
