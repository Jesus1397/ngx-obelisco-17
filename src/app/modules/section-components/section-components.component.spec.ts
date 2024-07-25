import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponentsComponent } from './section-components.component';

describe('SectionComponentsComponent', () => {
  let component: SectionComponentsComponent;
  let fixture: ComponentFixture<SectionComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
