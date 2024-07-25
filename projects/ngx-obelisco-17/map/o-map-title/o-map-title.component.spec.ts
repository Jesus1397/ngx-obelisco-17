import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMapTitleComponent } from './o-map-title.component';

describe('OMapTitleComponent', () => {
  let component: OMapTitleComponent;
  let fixture: ComponentFixture<OMapTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OMapTitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OMapTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
