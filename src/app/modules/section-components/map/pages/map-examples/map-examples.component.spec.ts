import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapExamplesComponent } from './map-examples.component';

describe('MapExamplesComponent', () => {
  let component: MapExamplesComponent;
  let fixture: ComponentFixture<MapExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MapExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
