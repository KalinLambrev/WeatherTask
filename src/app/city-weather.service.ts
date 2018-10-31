import { History } from './history';
import { CityForecast } from './city-forecast';
import { ErrorService } from './error.service';
import { Router } from '@angular/router';
import { CityWeather } from './city-weather';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherService {

  private _url = 'http://api.apixu.com/v1/current.json?key=563d9c4ee0984c4085d121520182910&q=';
  private _forecastUrl = 'http://api.apixu.com/v1/forecast.json?key=563d9c4ee0984c4085d121520182910&q=';
  constructor(private errorService: ErrorService, private router: Router, private http: HttpClient) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }
  isMobileResolution: boolean;
  weatherInfo;
  error;
  forecastInfo;
  searchHistory;

  getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  getMethodWeatherInfo(city: string) {
    const searchUrl = this._url + city;
    return this.http.get<CityWeather>(searchUrl)
    .subscribe(data => {
      this.weatherInfo = data;
      this.setCityInfo(this.weatherInfo);
      console.log(this.weatherInfo);
      this.router.navigate(['forecast']);
    },
    error => {
      this.error = error;
      this.errorService.errorMessage = error.message;
      this.router.navigate(['error']);
      console.log('must navigate');
    });
  }

  getCityForecast(city: string) {
    const days = '&days=2';
    const url = this._forecastUrl + city + days;
    return this.http.get<CityForecast>(url)
    .subscribe(data => {
      this.forecastInfo = data;
      this.setForecastInfo(this.forecastInfo);
      console.log(this.forecastInfo);
    },
    error => {
      this.error = error;
      this.errorService.errorMessage = error.message;
      this.router.navigate(['error']);
    });
  }

  setCityInfo(cityInfo: CityWeather) {
    this.weatherInfo = cityInfo;
    localStorage.setItem('weatherInfo', JSON.stringify(this.weatherInfo));
 }

 getCityInfo() {
   this.weatherInfo = localStorage.getItem('weatherInfo');
   return JSON.parse(this.weatherInfo);
 }
 setForecastInfo(forecastInfo: CityForecast) {
  this.forecastInfo = forecastInfo;
  localStorage.setItem('forecastInfo', JSON.stringify(this.forecastInfo));
 }
 getForecastInfo() {
  this.forecastInfo = localStorage.getItem('forecastInfo');
  return JSON.parse(this.forecastInfo);
 }
 setHistory (history: History[]) {
   this.searchHistory = history;
  localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
 }
 getHistory() {
   this.searchHistory = localStorage.getItem('searchHistory');
   return JSON.parse(this.searchHistory);
 }
}

