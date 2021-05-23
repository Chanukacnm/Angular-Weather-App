import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-weather-app-main',
  templateUrl: './weather-app-main.component.html',
  styleUrls: ['./weather-app-main.component.css']
})
export class WeatherAppMainComponent implements OnInit {

  WeatherData:any;
  WeatherDataJPN:any;
  WeatherDataENG:any;
  WeatherDataAus:any;
  WeatherDataUs:any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.WeatherDataJPN = {
      main : {},
      isDay: true
    };
    this.WeatherDataENG = {
      main : {},
      isDay: true
    };
    this.WeatherDataAus = {
      main : {},
      isDay: true
    };
    this.WeatherDataUs = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?id=1248991&appid=bf3bc7962ef793944eda6ad3c8c8094d')
    .then(response=>response.json())
    .then(data=>{this.setWeatherDataCLMB(data);})

    fetch('https://api.openweathermap.org/data/2.5/weather?id=1850147&appid=bf3bc7962ef793944eda6ad3c8c8094d')
    .then(response=>response.json())
    .then(data=>{this.setWeatherDataTokyo(data);})

    fetch('https://api.openweathermap.org/data/2.5/weather?id=2644210&appid=bf3bc7962ef793944eda6ad3c8c8094d')
    .then(response=>response.json())
    .then(data=>{this.setWeatherDataLiverpool(data);})
    
    fetch('https://api.openweathermap.org/data/2.5/weather?id=2147714&appid=bf3bc7962ef793944eda6ad3c8c8094d')
    .then(response=>response.json())
    .then(data=>{this.setWeatherDataSydeney(data);})

    fetch('https://api.openweathermap.org/data/2.5/weather?id=4930956&appid=bf3bc7962ef793944eda6ad3c8c8094d')
    .then(response=>response.json())
    .then(data=>{this.setWeatherDataBoston(data);})

  }

  setWeatherDataCLMB(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();

    let sunriseTime = new Date(this.WeatherData.sys.sunrise * 1000);
    this.WeatherData.sunrise_time = sunriseTime.toLocaleTimeString();

    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.country = (this.WeatherData.sys.country);
    this.WeatherData.temp_feels_like = (this.WeatherData.weather[0].description);
    this.WeatherData.temp_feels_like_icon = (this.WeatherData.weather[0].icon);
    this.WeatherData.time_date = moment().format(" h:mm a, MMMM DD");
    this.WeatherData.pressure = (this.WeatherData.main.pressure).toFixed(0);
    this.WeatherData.visibility = (this.WeatherData.visibility).toFixed(0)/1000;
  }

  setWeatherDataTokyo(data){
    this.WeatherDataJPN = data;
    let sunsetTime = new Date(this.WeatherDataJPN.sys.sunset * 1000);
    this.WeatherDataJPN.sunset_time = sunsetTime.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' });

    let sunriseTime = new Date(this.WeatherDataJPN.sys.sunrise * 1000);
    this.WeatherDataJPN.sunrise_time = sunriseTime.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' });

    //console.log("aa",this.WeatherDataJPN.sunset_time);
    let currentDate = new Date();
    this.WeatherDataJPN.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherDataJPN.temp_celcius = (this.WeatherDataJPN.main.temp - 273.15).toFixed(0);
    this.WeatherDataJPN.temp_min = (this.WeatherDataJPN.main.temp_min - 273.15).toFixed(0);
    this.WeatherDataJPN.temp_max = (this.WeatherDataJPN.main.temp_max - 273.15).toFixed(0);
    this.WeatherDataJPN.country = (this.WeatherDataJPN.sys.country);
    this.WeatherDataJPN.temp_feels_like = (this.WeatherDataJPN.weather[0].description);
    this.WeatherDataJPN.temp_feels_like_icon = (this.WeatherDataJPN.weather[0].icon);
    this.WeatherDataJPN.time_date = moment.tz('Asia/Tokyo').format(" h:mm a, MMMM DD" );
    //console.log("moment",this.WeatherDataJPN.time_date);
    this.WeatherDataJPN.pressure = (this.WeatherDataJPN.main.pressure).toFixed(0);
    this.WeatherDataJPN.visibility = (this.WeatherDataJPN.visibility).toFixed(0)/1000;
  }

  setWeatherDataLiverpool(data){
    this.WeatherDataENG = data;
    let sunsetTime = new Date(this.WeatherDataENG.sys.sunset * 1000);
    this.WeatherDataENG.sunset_time = sunsetTime.toLocaleTimeString('en-US', { timeZone: 'Europe/London' });

    let sunriseTime = new Date(this.WeatherDataENG.sys.sunrise * 1000);
    this.WeatherDataENG.sunrise_time = sunriseTime.toLocaleTimeString('en-US', { timeZone: 'Europe/London' });

    //console.log("aa",this.WeatherDataENG.sunset_time);
    let currentDate = new Date();
    this.WeatherDataENG.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherDataENG.temp_celcius = (this.WeatherDataENG.main.temp - 273.15).toFixed(0);
    this.WeatherDataENG.temp_min = (this.WeatherDataENG.main.temp_min - 273.15).toFixed(0);
    this.WeatherDataENG.temp_max = (this.WeatherDataENG.main.temp_max - 273.15).toFixed(0);
    this.WeatherDataENG.country = (this.WeatherDataENG.sys.country);
    this.WeatherDataENG.temp_feels_like = (this.WeatherDataENG.weather[0].description);
    this.WeatherDataENG.temp_feels_like_icon = (this.WeatherDataENG.weather[0].icon);
    this.WeatherDataENG.time_date = moment.tz('Europe/London').format(" h:mm a, MMMM DD" );
    //console.log("moment",this.WeatherDataENG.time_date);
    this.WeatherDataENG.pressure = (this.WeatherDataENG.main.pressure).toFixed(0);
    this.WeatherDataENG.visibility = (this.WeatherDataENG.visibility).toFixed(0)/1000;
  }
  

  setWeatherDataSydeney(data){
    this.WeatherDataAus = data;
    let sunsetTime = new Date(this.WeatherDataAus.sys.sunset * 1000);
    this.WeatherDataAus.sunset_time = sunsetTime.toLocaleTimeString('en-US', { timeZone: 'Australia/Sydney' });

    let sunriseTime = new Date(this.WeatherDataAus.sys.sunrise * 1000);
    this.WeatherDataAus.sunrise_time = sunriseTime.toLocaleTimeString('en-US', { timeZone: 'Australia/Sydney' });

    //console.log("aa",this.WeatherDataAus.sunset_time);
    let currentDate = new Date();
    this.WeatherDataAus.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherDataAus.temp_celcius = (this.WeatherDataAus.main.temp - 273.15).toFixed(0);
    this.WeatherDataAus.temp_min = (this.WeatherDataAus.main.temp_min - 273.15).toFixed(0);
    this.WeatherDataAus.temp_max = (this.WeatherDataAus.main.temp_max - 273.15).toFixed(0);
    this.WeatherDataAus.country = (this.WeatherDataAus.sys.country);
    this.WeatherDataAus.temp_feels_like = (this.WeatherDataAus.weather[0].description);
    this.WeatherDataAus.temp_feels_like_icon = (this.WeatherDataAus.weather[0].icon);
    this.WeatherDataAus.time_date = moment.tz('Australia/Sydney').format(" h:mm a, MMMM DD" );
    //console.log("moment",this.WeatherDataAus.time_date);
    this.WeatherDataAus.pressure = (this.WeatherDataAus.main.pressure).toFixed(0);
    this.WeatherDataAus.visibility = (this.WeatherDataAus.visibility).toFixed(0)/1000;
  }

  setWeatherDataBoston(data){
    this.WeatherDataUs = data;
    let sunsetTime = new Date(this.WeatherDataUs.sys.sunset * 1000);
    this.WeatherDataUs.sunset_time = sunsetTime.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });

    let sunriseTime = new Date(this.WeatherDataUs.sys.sunrise * 1000);
    this.WeatherDataUs.sunrise_time = sunriseTime.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });

    //console.log("aa",this.WeatherDataUs.sunset_time);
    let currentDate = new Date();
    this.WeatherDataUs.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherDataUs.temp_celcius = (this.WeatherDataUs.main.temp - 273.15).toFixed(0);
    this.WeatherDataUs.temp_min = (this.WeatherDataUs.main.temp_min - 273.15).toFixed(0);
    this.WeatherDataUs.temp_max = (this.WeatherDataUs.main.temp_max - 273.15).toFixed(0);
    this.WeatherDataUs.country = (this.WeatherDataUs.sys.country);
    this.WeatherDataUs.temp_feels_like = (this.WeatherDataUs.weather[0].description);
    this.WeatherDataUs.temp_feels_like_icon = (this.WeatherDataUs.weather[0].icon);
    this.WeatherDataUs.time_date = moment.tz('America/New_York').format(" h:mm a, MMMM DD" );
    //console.log("moment",this.WeatherDataUs.time_date);
    this.WeatherDataUs.pressure = (this.WeatherDataUs.main.pressure).toFixed(0);
    this.WeatherDataUs.visibility = (this.WeatherDataUs.visibility).toFixed(0)/1000;
  }
}
