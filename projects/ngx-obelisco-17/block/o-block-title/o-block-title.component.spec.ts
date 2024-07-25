import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBlockTitleComponent } from './o-block-title.component';

describe('OBlockTitleComponent', () => {
  let component: OBlockTitleComponent;
  let fixture: ComponentFixture<OBlockTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBlockTitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBlockTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
