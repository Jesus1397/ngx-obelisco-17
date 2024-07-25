import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryExamplesComponent } from './gallery-examples.component';

describe('GalleryExamplesComponent', () => {
  let component: GalleryExamplesComponent;
  let fixture: ComponentFixture<GalleryExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
