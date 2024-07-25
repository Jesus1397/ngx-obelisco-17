import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseSubtitleComponent } from './o-collapse-subtitle.component';

describe('OCollapseSubtitleComponent', () => {
  let component: OCollapseSubtitleComponent;
  let fixture: ComponentFixture<OCollapseSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseSubtitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
