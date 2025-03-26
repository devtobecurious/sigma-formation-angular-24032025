import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWeatherComponent } from './display-weather.component';

fdescribe('DisplayWeatherComponent', () => {
  let component: DisplayWeatherComponent;
  let fixture: ComponentFixture<DisplayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title of temperature', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Temperature');
  })

  it('should display temperature', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.temp')?.textContent).toContain('10');
  })
});

