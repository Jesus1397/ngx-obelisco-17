import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseExamplesComponent } from './collapse-examples.component';

describe('CollapseExamplesComponent', () => {
  let component: CollapseExamplesComponent;
  let fixture: ComponentFixture<CollapseExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapseExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
