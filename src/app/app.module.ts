import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherAppMainComponent } from './Components/weather-app-main/weather-app-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherAppMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
