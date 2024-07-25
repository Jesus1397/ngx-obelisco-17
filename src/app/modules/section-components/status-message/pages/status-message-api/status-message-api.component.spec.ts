import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMessageApiComponent } from './status-message-api.component';

describe('StatusMessageApiComponent', () => {
  let component: StatusMessageApiComponent;
  let fixture: ComponentFixture<StatusMessageApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusMessageApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusMessageApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
