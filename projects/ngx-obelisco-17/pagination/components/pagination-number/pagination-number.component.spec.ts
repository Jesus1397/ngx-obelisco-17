import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationNumberComponent } from './pagination-number.component';

describe('PaginationNumberComponent', () => {
  let component: PaginationNumberComponent;
  let fixture: ComponentFixture<PaginationNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationNumberComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
