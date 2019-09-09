import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'movie-preview';
  activetedRouterName:any;
  routerLinks = [
    {path:"trendingchart",name:"Trending Charts"},
    {path:"popularmovies",name:"Popular Movies"},
    {path:"latestmovies",name:"Latest Movies"},
    {path:"upcommingmovies",name:"Upcomming Movies"},
    {path:"topratedmovies",name:"Top-Rated Movies"},
    {path:"nowplayingmovies",name:"Now-Playing Movies"},
  ]
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ActivetedRouter(event){
    this.activetedRouterName = event;
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  
}
