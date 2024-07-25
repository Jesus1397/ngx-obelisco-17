import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBlockComponent } from './o-block.component';

describe('OBlockComponent', () => {
  let component: OBlockComponent;
  let fixture: ComponentFixture<OBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
