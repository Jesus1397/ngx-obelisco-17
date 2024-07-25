import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMapContentComponent } from './o-map-content.component';

describe('OMapContentComponent', () => {
  let component: OMapContentComponent;
  let fixture: ComponentFixture<OMapContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OMapContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OMapContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
