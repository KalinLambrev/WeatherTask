import { ErrorService } from './error.service';
import { ErrorComponent } from './error.component';
import { CityWeatherService } from './city-weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ForecatsComponentComponent } from './forecats-component/forecats-component.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    ForecatsComponentComponent,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [CityWeatherService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
