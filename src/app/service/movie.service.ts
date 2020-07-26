import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, of } from 'rxjs';
import { Movie } from '../model/movie';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieService {
  private baseURL = environment.URL;
  private key = '4b10cf2f8e6ed1fcb506bd3929ecee40';
  public routingName: Observable<any>;
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient, private title: Title) { }

  getMovies(path: string , index): Observable<any> {
    const api = `${this.baseUrl}${path}?api_key=${this.key}&language=en-US&page=${index}`;
    return this.http.get(api);
  }

  getPopularMovies(index): Observable<any> {
    const api = `${this.baseURL}movie/popular?api_key=${this.key}&language=en-US&page=${index}`;
    return this.http.get(api);
  }

  getTrendingCharts() {
    return this.http.get(this.baseURL + 'trending/all/day?api_key=${key}');
  }

  getMovieDetails(id) {
    return this.http.get(`${this.baseURL}movie/${id}?api_key=${this.key}&language=en-US`);
  }

  getTopRatedMovies(index) {
    return this.http.get(`${this.baseURL}movie/top_rated?api_key=${this.key}&language=en-US&page=${index}`);
  }

  getUpcommingMovies(index) {
    return this.http.get(`${this.baseURL}movie/upcoming?api_key=${this.key}&language=en-US&page=${index}`);
  }

  getLatestMovies() {
    return this.http.get(`${this.baseURL}movie/latest?api_key=${this.key}&language=en-US`);
  }

  getNowPlayingMovies(index) {
    return this.http.get(`${this.baseURL}movie/now_playing?api_key=${this.key}&language=en-US&page=${index}`);
  }

  searchMovie(movieName: string) {
    const key = `${this.key}&language=en-US`;
    return this.http.get(`${this.baseURL}search/movie?api_key=${key}&query=${movieName}&page=1&include_adult=false`);
  }

  getTopRatedTv(index) {
    return this.http.get(`${this.baseURL}tv/top_rated?api_key=${this.key}&language=en-US&page=${index}`);
  }
  setTitle(name: string) {
    this.title.setTitle(name);
  }

  setRoutingNavigation(route: string) {
    if (window.location.pathname.indexOf('tv') === 1) {
      this.routingName = of([
        { path: '/tv/trendingchart', name: 'Trending Charts' },
        { path: '/tv/popular', name: 'Popular Tv' , query : 1},
        // { path: '/tv/latest', name: 'Latest Tv', query : 1 },
        { path: '/tv/top_rated', name: 'Top-Rated Tv', query : 1 },
        // { path: '/tv/upcommingmovies', name: 'Upcomming Tv' },
        // { path: '/tv/topratedmovies', name: 'Top-Rated Tv' },
        // { path: '/tv/nowplayingmovies', name: 'Now-Playing Tv' },
      ]);
    } else if (window.location.pathname.indexOf('movie') === 1) {
      this.routingName = of([
        { path: '/movie/trendingchart', name: 'Trending Charts' },
        { path: '/movie/popular', name: 'Popular Movies', query : 1 },
        { path: '/movie/latest', name: 'Latest Movies', query : 1 },
        { path: '/movie/upcoming', name: 'Upcomming Movies', query : 1 },
        { path: '/movie/top_rated', name: 'Top-Rated Movies', query : 1 },
        { path: '/movie/now_playing', name: 'Now-Playing Movies', query : 1 },
      ]);
    } else if (window.location.pathname.indexOf('person') === 1) {
      this.routingName = of([
        { path: '/person/popular', name: 'Popular people', query : 1 }
      ]);
    } else if (window.location.pathname.indexOf('company') === 1) {
      this.routingName = of([

      ]);
    }
  }

  get getRoutingNavigation(): Observable<any> {
    return this.routingName;
  }
}
