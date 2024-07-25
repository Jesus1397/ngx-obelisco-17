import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseApiComponent } from './collapse-api.component';

describe('CollapseApiComponent', () => {
  let component: CollapseApiComponent;
  let fixture: ComponentFixture<CollapseApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapseApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
