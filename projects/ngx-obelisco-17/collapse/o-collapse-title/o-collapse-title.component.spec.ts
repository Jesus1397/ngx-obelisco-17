import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseTitleComponent } from './o-collapse-title.component';

describe('OCollapseTitleComponent', () => {
  let component: OCollapseTitleComponent;
  let fixture: ComponentFixture<OCollapseTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseTitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
