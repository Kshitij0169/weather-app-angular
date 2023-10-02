import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedForecastComponent } from './advanced-forecast.component';

describe('AdvancedForecastComponent', () => {
  let component: AdvancedForecastComponent;
  let fixture: ComponentFixture<AdvancedForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
