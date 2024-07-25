import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockExamplesComponent } from './block-examples.component';

describe('BlockExamplesComponent', () => {
  let component: BlockExamplesComponent;
  let fixture: ComponentFixture<BlockExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BlockExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
