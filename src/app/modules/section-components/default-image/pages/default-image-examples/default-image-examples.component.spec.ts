import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultImageExamplesComponent } from './default-image-examples.component';

describe('DefaultImageExamplesComponent', () => {
  let component: DefaultImageExamplesComponent;
  let fixture: ComponentFixture<DefaultImageExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultImageExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultImageExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
