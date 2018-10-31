import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  matcher: MediaQueryList;
  title = 'weather-forecast';

  showLoadingIndicator = true;
  constructor(private router: Router, public breakpointObserver: BreakpointObserver, public mediaMatcher: MediaMatcher) {
    this.router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
        console.log('Loading starts....');
      }

      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
        console.log('Loading ends....');
      }
    });
  }

  ngOnInit() {
    this.matcher = this.mediaMatcher.matchMedia('(min-width: 766px)');

    this.matcher.addListener(this.myListener);
  }

  ngOnDestroy() {
    this.matcher.removeListener(this.myListener);
  }

  myListener(event) {
    console.log(event.matches ? 'match' : 'no match');
  }
}
