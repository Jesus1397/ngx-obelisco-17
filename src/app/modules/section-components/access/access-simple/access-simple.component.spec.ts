import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSimpleComponent } from './access-simple.component';

describe('AccessSimpleComponent', () => {
  let component: AccessSimpleComponent;
  let fixture: ComponentFixture<AccessSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessSimpleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
