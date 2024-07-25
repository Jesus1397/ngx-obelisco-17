import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessListApiComponent } from './access-list-api.component';

describe('AccessListApiComponent', () => {
  let component: AccessListApiComponent;
  let fixture: ComponentFixture<AccessListApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessListApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessListApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
