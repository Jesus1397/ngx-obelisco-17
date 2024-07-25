import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTabsTwoComponent } from './example-tabs-two.component';

describe('ExampleTabsTwoComponent', () => {
  let component: ExampleTabsTwoComponent;
  let fixture: ComponentFixture<ExampleTabsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleTabsTwoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleTabsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
