import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverResourcesComponent } from './discover-resources.component';

describe('DiscoverResourcesComponent', () => {
  let component: DiscoverResourcesComponent;
  let fixture: ComponentFixture<DiscoverResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
