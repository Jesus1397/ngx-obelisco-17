import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTabsComponent } from './o-tabs.component';

describe('OTabsComponent', () => {
  let component: OTabsComponent;
  let fixture: ComponentFixture<OTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OTabsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
