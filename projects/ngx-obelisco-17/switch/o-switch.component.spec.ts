import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSwitchComponent } from './o-switch.component';

describe('OSwitchComponent', () => {
  let component: OSwitchComponent;
  let fixture: ComponentFixture<OSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
