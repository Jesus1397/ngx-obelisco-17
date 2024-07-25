import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContentExamplesComponent } from './custom-content-examples.component';

describe('CustomContentExamplesComponent', () => {
  let component: CustomContentExamplesComponent;
  let fixture: ComponentFixture<CustomContentExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomContentExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomContentExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
