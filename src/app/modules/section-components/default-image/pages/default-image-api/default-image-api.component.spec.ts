import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultImageApiComponent } from './default-image-api.component';

describe('DefaultImageApiComponent', () => {
  let component: DefaultImageApiComponent;
  let fixture: ComponentFixture<DefaultImageApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultImageApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultImageApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
