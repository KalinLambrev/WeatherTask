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
  tempForecastC;
  textFore;
  iconForecast;
  info: CityWeather = this.weather.getCityInfo();

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.cityName = this.info.location.name;
    this.localtime = this.info.location.localtime;
    this.icon = this.info.current.condition.icon;
    this.text = this.info.current.condition.text;
    this.tempC = this.info.current.temp_c;
    this.wind = this.info.current.wind_kph;
    this.tempFeel = this.info.current.feelslike_c;
    this.humidity = this.info.current.humidity;
    // this.time = this.info.forecast.forecastday[0].date;
  }

}
