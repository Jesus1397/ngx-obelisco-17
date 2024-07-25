import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMatDocComponent } from './icon-mat-doc.component';

describe('IconMatDocComponent', () => {
  let component: IconMatDocComponent;
  let fixture: ComponentFixture<IconMatDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconMatDocComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IconMatDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
