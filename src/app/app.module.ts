import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForecastService } from './weather-forecast.service';
import { FormsModule } from '@angular/forms';
import { AdvancedForecastComponent } from './advanced-forecast/advanced-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
