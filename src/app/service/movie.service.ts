import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  key = '4b10cf2f8e6ed1fcb506bd3929ecee40';
  api = 'https://api.themoviedb.org/3';
  languages: [];
  constructor(private http: HttpClient) { }

  get getLanguages() {
    return this.http.get(`${this.api}/configuration/languages?api_key=${this.key}`);
  }

  get getCountries() {
    return this.http.get(`${this.api}/configuration/countries?api_key=${this.key}`);
  }

  getMovieVideos(id) {
    return this.http.get(`${this.api}/movie/${id}/videos?api_key=${this.key}`);
  }

  getPopularMovies(params): Observable<any> {
    let api = '';
    if (params.with_original_language) {
      api = `${this.api}/movie/popular?api_key=${this.key}&language=en-US&page=${params.page}&with_original_language=${params.with_original_language}`;
    } else {
      api = `${this.api}/movie/popular?api_key=${this.key}&language=en-US&page=${params.page}`;
    }
    return this.http.get(api);
  }

  getTrendingCharts() {
    return this.http.get(`${this.api}/trending/all/day?api_key=${this.key}`);
  }

  getMovieDetails(id) {
    return this.http.get(`${this.api}/movie/${id}?api_key=${this.key}&language=en-US&append_to_response=videos`);
  }

  getTopRatedMovies(index) {
    return this.http.get(`${this.api}/movie/top_rated?api_key=${this.key}&language=en-US&page=${index}`);
  }

  getUpcommingMovies(index) {
    return this.http.get(`${this.api}/movie/upcoming?api_key=${this.key}&language=en-US&page=${index}`);
  }

  getLatestMovies() {
    return this.http.get(`${this.api}/movie/latest?api_key=${this.key}&language=en-US`);
  }

  getNowPlayingMovies(index) {
    return this.http.get(`${this.api}/movie/now_playing?api_key=${this.key}&language=en-US&page=${index}`);
  }

  searchMovieName(movie) {
    return this.http.get(`${this.api}/search/movie?api_key=${this.key}&language=en-US&query=${movie}&page=1&include_adult=false`);
  }
}
