import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OStatusMessageComponent } from './o-status-message.component';

describe('StatusMessageComponent', () => {
  let component: OStatusMessageComponent;
  let fixture: ComponentFixture<OStatusMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OStatusMessageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OStatusMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
