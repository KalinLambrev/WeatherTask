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

  constructor(private errorService: ErrorService, private router: Router, private http: HttpClient) {
  }

  weatherinfo;
  cityInfo;
  error;

  getMethodWeatherInfo(city: string) {
    const searchUrl = this._url + city;
    return this.http.get<CityWeather>(searchUrl)
    .subscribe(data => {
      this.weatherinfo = data;
      this.setCityInfo(this.weatherinfo);
      console.log(this.weatherinfo);
      this.router.navigate(['forecast']);
    },
    error => {
      this.error = error;
      this.errorService.errorMessage = error.message;
      this.router.navigate(['error']);
      console.log('must navigate');
    });
  }

  setCityInfo(cityInfo: CityWeather) {
    this.cityInfo = cityInfo;
   localStorage.setItem('allPallets', JSON.stringify(this.cityInfo));
 }

 getCityInfo() {
   this.cityInfo = localStorage.getItem('allPallets');
   return JSON.parse(this.cityInfo);
 }
}

