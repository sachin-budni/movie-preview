import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovieService } from './service/movie.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Router } from '@angular/router';
import { Movie } from './model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  activetedRouterName: any;
  routerLinks = [
    { path: 'trendingchart', name: 'Trending Charts' },
    { path: 'popularmovies', name: 'Popular Movies' },
    { path: 'latestmovies', name: 'Latest Movies' },
    { path: 'upcommingmovies', name: 'Upcomming Movies' },
    { path: 'topratedmovies', name: 'Top-Rated Movies' },
    { path: 'nowplayingmovies', name: 'Now-Playing Movies' },
  ];
  selectedFood: any;
  searchForm: FormGroup;
  languageForm: FormGroup;
  mobileQuery: MediaQueryList;
  filteredOptions: Observable<any>;
  $countries: Observable<any>;
  langauges = [];
  private _mobileQueryListener: () => void;
  // langauges = this.movie.languages;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private movie: MovieService, private fb: FormBuilder,
              private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      movie: []
    });
    this.languageForm = this.fb.group({
      language: []
    });
    this.searchForm.controls.movie.valueChanges.subscribe((movie: string) => {
      if (movie && movie.length !== 0) {
        this.filteredOptions = this.movie.searchMovieName(movie).pipe(
          map((movies: any) => movies.results)
        );
      }
    });
    this.languageForm.controls.language.valueChanges.subscribe((lang: string) => {
      if (lang && lang.length && lang.length !== 0) {
        this.langauges = this.movie.languages
        .filter((l: any) => l.english_name.toLocaleUpperCase().indexOf(lang.toLocaleUpperCase()) !== -1);
      }
    });
    this.movie.getLanguages
    .pipe(map((lang: []) => {
      return lang.sort((a: any, b: any) => a.english_name - b.english_name);
    })).subscribe((lang: any) => {
      this.movie.languages = lang;
    });
    this.$countries = this.movie.getCountries
    .pipe(map((lang: []) => {
      return lang.sort((a: any, b: any) => a.english_name - b.english_name);
    }));
  }

  ActivetedRouter(event) {
    this.searchForm.controls.movie.setValue('');
    this.activetedRouterName = event;
  }

  selectedMovie(event: MatAutocompleteSelectedEvent) {
    this.router.navigate(['/popularmovies', event.option.value.id ]);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  displayLanguageFn(event) {
    return event ? event.english_name : event;
  }
  displayFn(value: any) {
    const title = value && value.title ? value.title : value;
    const originalTitle = value && value.original_title ? value.original_title : value;
    if (originalTitle) {
      return originalTitle + ' | ' + title;
    }
    return title;
  }

  onSelectLanguage(event) {
    console.log(event);
  }

  onSubmitLanguage(value) {
    this.router.navigate(['/popularmovies'], { queryParams: { page: 1, language: value.language.iso_639_1  } });
  }

  getLang(lng) {
    return this.movie.languages.filter((l: any) => l.iso_639_1 === lng).map((l: any) => l.english_name);
  }
}
