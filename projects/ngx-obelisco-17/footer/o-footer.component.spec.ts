import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OFooterComponent } from './o-footer.component';

describe('OFooterComponent', () => {
  let component: OFooterComponent;
  let fixture: ComponentFixture<OFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
