import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryApiComponent } from './gallery-api.component';

describe('GalleryApiComponent', () => {
  let component: GalleryApiComponent;
  let fixture: ComponentFixture<GalleryApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
