import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { IMovieDetails } from '../model/movie.d';
import { ILanguage, ILocalParams } from '../model/models';

@Injectable()
export class MovieService {
  languages: ILanguage[];
  constructor(private http: HttpClient) { }

  get getLanguages(): Observable<ILanguage[]> {
    return this.http.get<ILanguage[]>(`/configuration/languages?api_key=`);
  }

  get getCountries(): any {
    return this.http.get(`/configuration/countries?api_key=`);
  }

  getMovieVideos(id): any {
    return this.http.get(`/movie/${id}/videos?api_key=`);
  }

  getPopularMovies(params): Observable<IMovieDetails> {
    let api = '';
    if (params.with_original_language) {
      api = `/movie/popular?api_key=&language=en-US&page=${params.page}&with_original_language=${params.with_original_language}`;
    } else {
      api = `/movie/popular?api_key=&language=en-US&page=${params.page}`;
    }
    return this.http.get<IMovieDetails>(api);
  }
  getPopularTvShows(params): Observable<IMovieDetails> {
    let api = '';
    if (params.with_original_language) {
      // https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
      api = `/tv/popular?api_key=&language=en-US&page=${params.page}&with_original_language=${params.with_original_language}`;
    } else {
      api = `/tv/popular?api_key=&language=en-US&page=${params.page}`;
    }
    return this.http.get<IMovieDetails>(api);
  }

  getTrendingCharts(): any {
    return this.http.get(`/trending/all/day?api_key=`);
  }

  getMovieDetails(id): any {
    return this.http.get(`/movie/${id}?api_key=&language=en-US&append_to_response=videos`);
  }

  getMovieCast(id): any {
    return this.http.get(`/movie/${id}/credits?api_key=`);
  }

  getTopRatedMovies(index): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`/movie/top_rated?api_key=&language=en-US&page=${index}`);
  }

  getUpcommingMovies(index): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`/movie/upcoming?api_key=&language=en-US&page=${index}`);
  }

  getLatestMovies(): any {
    return this.http.get(`/movie/latest?api_key=&language=en-US`);
  }

  getNowPlayingMovies(index): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`/movie/now_playing?api_key=&language=en-US&page=${index}`);
  }

  searchMovieName(movie): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`/search/movie?api_key=&language=en-US&query=${movie}&page=1&include_adult=false`);
  }

  convertLanguageObj(obj: ILocalParams): ILocalParams {
    const paramObj = {} as any;
    if (obj.language) {
      paramObj.with_original_language = obj.language;
      paramObj.page = obj.page;
    } else {
      paramObj.page = obj.page;
    }
    return paramObj;
  }

  get genres(): Observable<any> {
    return this.http.get('/movie/{585244}/similar');
  }

  similarMovies(id, page): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`/movie/${id}/similar?page=${page}&api_key=&language=en-US`);
  }
  moviesReviews(id, page): Observable<any> {
    return this.http.get<IMovieDetails>(`/movie/${id}/reviews?api_key=&page=${page}&language=en-US`);
  }
}
