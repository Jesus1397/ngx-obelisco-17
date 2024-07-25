import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseInputSubtitleComponent } from './o-collapse-input-subtitle.component';

describe('OCollapseInputSubtitleComponent', () => {
  let component: OCollapseInputSubtitleComponent;
  let fixture: ComponentFixture<OCollapseInputSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseInputSubtitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseInputSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
