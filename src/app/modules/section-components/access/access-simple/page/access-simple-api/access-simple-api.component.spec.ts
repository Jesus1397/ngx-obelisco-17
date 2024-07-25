import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSimpleApiComponent } from './access-simple-api.component';

describe('AccessSimpleApiComponent', () => {
  let component: AccessSimpleApiComponent;
  let fixture: ComponentFixture<AccessSimpleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessSimpleApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessSimpleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
