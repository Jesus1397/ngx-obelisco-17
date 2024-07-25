import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBxDocComponent } from './icon-bx-doc.component';

describe('IconBxDocComponent', () => {
  let component: IconBxDocComponent;
  let fixture: ComponentFixture<IconBxDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconBxDocComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IconBxDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
