import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBlockFooterComponent } from './o-block-footer.component';

describe('OBlockFooterComponent', () => {
  let component: OBlockFooterComponent;
  let fixture: ComponentFixture<OBlockFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OBlockFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBlockFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
