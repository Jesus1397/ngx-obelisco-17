import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconApiComponent } from './icon-api.component';

describe('IconApiComponent', () => {
  let component: IconApiComponent;
  let fixture: ComponentFixture<IconApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IconApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
