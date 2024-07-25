import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPaginationComponent } from './o-pagination.component';

describe('OPaginationComponent', () => {
  let component: OPaginationComponent;
  let fixture: ComponentFixture<OPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OPaginationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
