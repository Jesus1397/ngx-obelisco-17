import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBlockHeaderComponent } from './o-block-header.component';

describe('OBlockHeaderComponent', () => {
  let component: OBlockHeaderComponent;
  let fixture: ComponentFixture<OBlockHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBlockHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBlockHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
