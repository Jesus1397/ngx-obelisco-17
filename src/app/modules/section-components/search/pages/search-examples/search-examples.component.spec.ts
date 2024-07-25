import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExamplesComponent } from './search-examples.component';

describe('SearchExamplesComponent', () => {
  let component: SearchExamplesComponent;
  let fixture: ComponentFixture<SearchExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
