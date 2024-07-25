import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHighlightedVideoComponent } from './o-highlighted-video.component';

describe('OHighlightedVideoComponent', () => {
  let component: OHighlightedVideoComponent;
  let fixture: ComponentFixture<OHighlightedVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OHighlightedVideoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OHighlightedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
