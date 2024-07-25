import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBlockTextComponent } from './o-block-text.component';

describe('OBlockTextComponent', () => {
  let component: OBlockTextComponent;
  let fixture: ComponentFixture<OBlockTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBlockTextComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBlockTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
