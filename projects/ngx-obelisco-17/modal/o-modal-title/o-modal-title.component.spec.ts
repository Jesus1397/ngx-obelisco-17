import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OModalTitleComponent } from './o-modal-title.component';

describe('OModalTitleComponent', () => {
  let component: OModalTitleComponent;
  let fixture: ComponentFixture<OModalTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OModalTitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OModalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
