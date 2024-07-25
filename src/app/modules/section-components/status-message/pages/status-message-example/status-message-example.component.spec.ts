import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMessageExampleComponent } from './status-message-example.component';

describe('StatusMessageExampleComponent', () => {
  let component: StatusMessageExampleComponent;
  let fixture: ComponentFixture<StatusMessageExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusMessageExampleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusMessageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
