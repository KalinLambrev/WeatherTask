import { History } from './../history';
import { CityWeatherService } from './../city-weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  constructor(private weather: CityWeatherService) { }
  inputValue = true;
  city;
  search: History[] = this.weather.getHistory();


  ngOnInit() {
    this.getLinks();
  }
  onSubmit() { this.inputValue = false; }

  searchCity(value: string) {
    const model = new History();
    this.city = value;
    model.searchCity = value;
    model.dateTime = new Date().toLocaleTimeString();
    console.log(this.city);
    this.weather.getMethodWeatherInfo(this.city);
    const max = 5;
    if (this.search.length === max) {
      this.search.shift();
      this.search.push(model);
    } else {
      this.search.push(model);
    }
    this.weather.setHistory(this.search);
    return this.search;
  }
  getLinks() {
    return this.search = this.weather.getHistory();
  }
}
