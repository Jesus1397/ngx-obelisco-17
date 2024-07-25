import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONavHorizontalComponent } from './o-nav-horizontal.component';

describe('ONavHorizontalComponent', () => {
  let component: ONavHorizontalComponent;
  let fixture: ComponentFixture<ONavHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ONavHorizontalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ONavHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
