import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable()
export class MovieService {
  languages: [];
  constructor(private http: HttpClient) { }

  get getLanguages(): Observable<any> {
    return this.http.get(`/configuration/languages?api_key=`);
  }

  get getCountries(): any {
    return this.http.get(`/configuration/countries?api_key=`);
  }

  getMovieVideos(id): any {
    return this.http.get(`/movie/${id}/videos?api_key=`);
  }

  getPopularMovies(params): Observable<any> {
    let api = '';
    if (params.with_original_language) {
      api = `/movie/popular?api_key=&language=en-US&page=${params.page}&with_original_language=${params.with_original_language}`;
    } else {
      api = `/movie/popular?api_key=&language=en-US&page=${params.page}`;
    }
    return this.http.get(api);
  }

  getTrendingCharts(): any {
    return this.http.get(`/trending/all/day?api_key=`);
  }

  getMovieDetails(id): any {
    return this.http.get(`/movie/${id}?api_key=&language=en-US&append_to_response=videos`);
  }

  getTopRatedMovies(index): any {
    return this.http.get(`/movie/top_rated?api_key=&language=en-US&page=${index}`);
  }

  getUpcommingMovies(index): any {
    return this.http.get(`/movie/upcoming?api_key=&language=en-US&page=${index}`);
  }

  getLatestMovies(): any {
    return this.http.get(`/movie/latest?api_key=&language=en-US`);
  }

  getNowPlayingMovies(index): any {
    return this.http.get(`/movie/now_playing?api_key=&language=en-US&page=${index}`);
  }

  searchMovieName(movie): any {
    return this.http.get(`/search/movie?api_key=&language=en-US&query=${movie}&page=1&include_adult=false`);
  }

  convertLanguageObj(obj): any {
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
    // return this.http.get('/genre/movie/list?api_key=&language=en-US')
    return this.http.get('/movie/{585244}/similar');
  }

  similarMovies(id, page): Observable<any> {
    return this.http.get(`/movie/${id}/similar?page=${page}&api_key=&language=en-US`);
  }
}
