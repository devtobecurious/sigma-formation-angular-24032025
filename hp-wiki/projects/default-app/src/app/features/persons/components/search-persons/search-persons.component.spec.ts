import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersonsComponent } from './search-persons.component';

describe('SearchPersonsComponent', () => {
  let component: SearchPersonsComponent;
  let fixture: ComponentFixture<SearchPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPersonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
