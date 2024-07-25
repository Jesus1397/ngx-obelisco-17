import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseHeaderComponent } from './o-collapse-header.component';

describe('OCollapseHeaderComponent', () => {
  let component: OCollapseHeaderComponent;
  let fixture: ComponentFixture<OCollapseHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
