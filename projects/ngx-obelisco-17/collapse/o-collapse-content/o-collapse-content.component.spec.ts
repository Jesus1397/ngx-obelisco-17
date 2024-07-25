import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseContentComponent } from './o-collapse-content.component';

describe('OCollapseContentComponent', () => {
  let component: OCollapseContentComponent;
  let fixture: ComponentFixture<OCollapseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
