import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTabsThreeComponent } from './example-tabs-three.component';

describe('ExampleTabsThreeComponent', () => {
  let component: ExampleTabsThreeComponent;
  let fixture: ComponentFixture<ExampleTabsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleTabsThreeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleTabsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
