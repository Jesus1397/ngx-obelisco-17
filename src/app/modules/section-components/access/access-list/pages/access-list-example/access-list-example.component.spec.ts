import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessListExampleComponent } from './access-list-example.component';

describe('AccessListExampleComponent', () => {
  let component: AccessListExampleComponent;
  let fixture: ComponentFixture<AccessListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessListExampleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
