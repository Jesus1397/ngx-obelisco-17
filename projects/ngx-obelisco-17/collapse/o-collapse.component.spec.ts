import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseComponent } from './o-collapse.component';

describe('OCollapseComponent', () => {
  let component: OCollapseComponent;
  let fixture: ComponentFixture<OCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
