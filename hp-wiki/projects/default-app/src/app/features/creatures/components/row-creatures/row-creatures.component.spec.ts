import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCreaturesComponent } from './row-creatures.component';

describe('RowCreaturesComponent', () => {
  let component: RowCreaturesComponent;
  let fixture: ComponentFixture<RowCreaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowCreaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowCreaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
