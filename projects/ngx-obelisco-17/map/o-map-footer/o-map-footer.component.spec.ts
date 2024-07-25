import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMapFooterComponent } from './o-map-footer.component';

describe('OMapFooterComponent', () => {
  let component: OMapFooterComponent;
  let fixture: ComponentFixture<OMapFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OMapFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OMapFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
