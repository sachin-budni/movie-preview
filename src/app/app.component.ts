import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { MovieService } from './service/movie.service';
import { Observable } from 'rxjs';
import { Movie } from './model/movie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activetedRouterName: any;
  // routerLinks = [
  //   { path: 'trendingchart', name: 'Trending Charts' },
  //   { path: 'popularmovies', name: 'Popular Movies' },
  //   { path: 'latestmovies', name: 'Latest Movies' },
  //   { path: 'upcommingmovies', name: 'Upcomming Movies' },
  //   { path: 'topratedmovies', name: 'Top-Rated Movies' },
  //   { path: 'nowplayingmovies', name: 'Now-Playing Movies' },
  // ];
  movieSearch = new FormControl();
  options: Movie[];
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public movie: MovieService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.movieSearch.valueChanges.subscribe((movieName: string) => {
      this.searchMovieName(movieName);
    });
  }

  searchMovieName(name: string) {
    this.movie.searchMovie(name).subscribe((movieData: any) => {
      this.options = movieData.results;
    });
  }

  ActivetedRouter(event) {
    this.activetedRouterName = event;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
