import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast.service';
import { AdvancedForecastModel } from '../AdvancedForecastModel';


@Component({
  selector: 'app-advanced-forecast',
  templateUrl: './advanced-forecast.component.html',
  styleUrls: ['./advanced-forecast.component.scss']
})
export class AdvancedForecastComponent implements OnChanges{
  @Input() latitude: number | null = null;
  @Input() longitude: number | null = null;
  @Input() day: number | null = null;
  dateCaption: Date | null = null;
  advancedForecast: AdvancedForecastModel = new AdvancedForecastModel;

  constructor(private forecastService: WeatherForecastService){}

  ngOnChanges(changes: SimpleChanges): void {
    this.downloadAdvancedData(this.day!);
    this.dateCaption = new Date();
    this.dateCaption?.setDate(new Date().getDate() + this.day! - 1);
  }

  downloadAdvancedData(i: number): void{
    this.forecastService.getAdvancedWeatherData(this.latitude!, this.longitude!, this.day!).subscribe({
      next: (res) => {
        this.advancedForecast.pressure = res.hourly.surface_pressure.slice((i - 1) * 24, i * 24);
        this.advancedForecast.rain = res.hourly.rain.slice((i - 1) * 24, i * 24);
        this.advancedForecast.snowfall = res.hourly.snowfall.slice((i - 1) * 24, i * 24);
        this.advancedForecast.visibility = res.hourly.visibility.slice((i - 1) * 24, i * 24);
        this.advancedForecast.windspeed = res.hourly.windspeed_10m.slice((i - 1) * 24, i * 24);
      },
      error: (err) => {
        alert("Wystąpił błąd nie pobrano danych");
      }
    });
  }

  roundNumber(i: number): number{
    return Math.round(i);
  }

  getAverage(array: number[]): number{
    let sum = 0;
    array.forEach((element) => sum += element);
    return sum / array.length;
  }
}
