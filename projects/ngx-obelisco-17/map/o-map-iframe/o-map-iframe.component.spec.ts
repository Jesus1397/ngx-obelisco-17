import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMapIframeComponent } from './o-map-iframe.component';

describe('OMapIframeComponent', () => {
  let component: OMapIframeComponent;
  let fixture: ComponentFixture<OMapIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OMapIframeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OMapIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
