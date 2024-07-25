import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApiComponent } from './card-api.component';

describe('CardApiComponent', () => {
  let component: CardApiComponent;
  let fixture: ComponentFixture<CardApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
