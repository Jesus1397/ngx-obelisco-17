import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OGalleryComponent } from './o-gallery.component';

describe('OGalleryComponent', () => {
  let component: OGalleryComponent;
  let fixture: ComponentFixture<OGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OGalleryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
