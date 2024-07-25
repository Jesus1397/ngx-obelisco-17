import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMapHeaderComponent } from './o-map-header.component';

describe('OMapHeaderComponent', () => {
  let component: OMapHeaderComponent;
  let fixture: ComponentFixture<OMapHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OMapHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OMapHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
