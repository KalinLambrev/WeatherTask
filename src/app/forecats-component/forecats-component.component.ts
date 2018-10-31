import { CityForecast } from './../city-forecast';
import { CityWeatherService } from './../city-weather.service';
import { Component, OnInit } from '@angular/core';
import { CityWeather } from '../city-weather';

@Component({
  selector: 'app-forecats-component',
  templateUrl: './forecats-component.component.html',
  styleUrls: ['./forecats-component.component.css']
})
export class ForecatsComponentComponent implements OnInit {

  constructor(private weather: CityWeatherService) { }

  cityName;
  localtime;
  icon;
  tempC;
  text;
  tempFeel;
  wind;
  humidity;
  time;
  date;
  info: CityWeather = this.weather.getCityInfo();
  forecastCity: CityForecast = this.weather.getForecastInfo();
  isShown = false;
  buttonDisabler = false;
  isMobile: boolean;

  ngOnInit() {
    this.getInfo();
    this.checkResolution();
  }

  getInfo() {
    this.isShown = false;
    this.buttonDisabler = false;
    this.cityName = this.info.location.name;
    this.localtime = this.info.location.localtime;
    this.icon = this.info.current.condition.icon;
    this.text = this.info.current.condition.text;
    this.tempC = this.info.current.temp_c;
    this.wind = this.info.current.wind_kph;
    this.tempFeel = this.info.current.feelslike_c;
    this.humidity = this.info.current.humidity;
  }

  getForecast(city: string) {
    const time = this.forecastCity.location.localtime.toString();
    return this.time = time.slice(11),
    this.date = time.slice(0, 11),
    this.weather.getCityForecast(city),
    this.buttonDisabler = true,
    this.isShown = true;
  }
  displaytime() {
    const time = this.forecastCity.location.localtime.toString();
    return time.slice(11);
  }

  checkResolution() {
    if (this.weather.getIsMobileResolution()) {
      return this.isMobile = true;
    } else {
      return this.isMobile = false;
    }
  }

}
