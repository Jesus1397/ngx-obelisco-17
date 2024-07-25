import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContentComponent } from './custom-content.component';

describe('CustomContentComponent', () => {
  let component: CustomContentComponent;
  let fixture: ComponentFixture<CustomContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
