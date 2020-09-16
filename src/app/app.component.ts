import { Component, ChangeDetectorRef, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovieService } from './service/movie.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Movie } from './model/movie';
import { ThemeService } from './theme/theme.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSlideToggleChange } from '@angular/material';

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
  @ViewChild('scroller', {static: false}) scrolls: ElementRef;
  activeThem = 'dark';

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private movie: MovieService, private fb: FormBuilder,
              private router: Router, private themeService: ThemeService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.matIconRegistry.addSvgIcon('left_arrow', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/left_arrow.svg'));
    this.matIconRegistry.addSvgIcon('right_arrow', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/right_arrow.svg'));
    this.matIconRegistry.addSvgIcon('menu', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/menu.svg'));
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
  }

  ActivetedRouter(event) {
    this.searchForm.controls.movie.setValue('');
    this.activetedRouterName = event;
  }

  onSubmitMovieSearch(movie) {
    if (movie && typeof movie !== 'string') {
      this.router.navigate(['/popularmovies', movie.movie.id ]);
    }
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
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

  onSubmitLanguage(value) {
    this.router.navigate(['/popularmovies'], { queryParams: { page: 1, language: value.language.iso_639_1  } });
  }

  getLang(lng) {
    return this.movie.languages.filter((l: any) => l.iso_639_1 === lng).map((l: any) => l.english_name);
  }

  changeToggle(event: MatSlideToggleChange) {
    console.log(event.checked);
    if (event.checked) {
      this.themeService.setActiveThem('light');
      this.activeThem = 'light';
    } else {
      this.themeService.setActiveThem('dark');
      this.activeThem = 'dark';
    }
  }
}
