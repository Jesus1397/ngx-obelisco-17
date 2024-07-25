import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSearchComponent } from './o-search.component';

describe('OSearchComponent', () => {
  let component: OSearchComponent;
  let fixture: ComponentFixture<OSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSearchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
