import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAccessListComponent } from './o-access-list.component';

describe('OAccessListComponent', () => {
  let component: OAccessListComponent;
  let fixture: ComponentFixture<OAccessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OAccessListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OAccessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
