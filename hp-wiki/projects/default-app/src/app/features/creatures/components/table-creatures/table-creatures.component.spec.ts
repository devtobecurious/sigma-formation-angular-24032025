import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreaturesComponent } from './table-creatures.component';

describe('TableCreaturesComponent', () => {
  let component: TableCreaturesComponent;
  let fixture: ComponentFixture<TableCreaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCreaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCreaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
