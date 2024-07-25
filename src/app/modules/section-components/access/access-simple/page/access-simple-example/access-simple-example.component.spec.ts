import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSimpleExampleComponent } from './access-simple-example.component';

describe('AccessSimpleExampleComponent', () => {
  let component: AccessSimpleExampleComponent;
  let fixture: ComponentFixture<AccessSimpleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessSimpleExampleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessSimpleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
