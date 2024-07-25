import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockApiComponent } from './block-api.component';

describe('BlockApiComponent', () => {
  let component: BlockApiComponent;
  let fixture: ComponentFixture<BlockApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BlockApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
