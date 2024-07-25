import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OModalContentComponent } from './o-modal-content.component';

describe('OModalContentComponent', () => {
  let component: OModalContentComponent;
  let fixture: ComponentFixture<OModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OModalContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
