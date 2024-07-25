import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTabsOneComponent } from './example-tabs-one.component';

describe('ExampleTabsOneComponent', () => {
  let component: ExampleTabsOneComponent;
  let fixture: ComponentFixture<ExampleTabsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleTabsOneComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleTabsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
