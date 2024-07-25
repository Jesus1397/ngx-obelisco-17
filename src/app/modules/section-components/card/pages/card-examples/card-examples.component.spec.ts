import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExamplesComponent } from './card-examples.component';

describe('CardExamplesComponent', () => {
  let component: CardExamplesComponent;
  let fixture: ComponentFixture<CardExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
