import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTableComponent } from './o-table.component';

describe('OTableComponent', () => {
  let component: OTableComponent;
  let fixture: ComponentFixture<OTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OTableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
