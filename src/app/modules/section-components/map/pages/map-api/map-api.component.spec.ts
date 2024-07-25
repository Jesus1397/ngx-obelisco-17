import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapApiComponent } from './map-api.component';

describe('MapApiComponent', () => {
  let component: MapApiComponent;
  let fixture: ComponentFixture<MapApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MapApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
