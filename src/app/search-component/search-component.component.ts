import { CityWeatherService } from './../city-weather.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CityWeather } from '../city-weather';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  constructor(private weather: CityWeatherService) { }
  inputValue = true;
  city;
  isShown = false;
  onSubmit() { this.inputValue = false; }

  searchCity(value: string) {
    this.city = value;
    console.log(this.city);
    this.weather.getMethodWeatherInfo(this.city);
  }

}
