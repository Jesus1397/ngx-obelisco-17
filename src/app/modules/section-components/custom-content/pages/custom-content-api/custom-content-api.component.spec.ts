import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContentApiComponent } from './custom-content-api.component';

describe('CustomContentApiComponent', () => {
  let component: CustomContentApiComponent;
  let fixture: ComponentFixture<CustomContentApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomContentApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomContentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
