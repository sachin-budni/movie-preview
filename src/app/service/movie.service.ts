import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { IMovieDetails } from '../model/movie.d';
import { ILanguage, ILocalParams, Type } from '../model/models';

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

  getList(type, routerName, params): Observable<IMovieDetails> {
    let api = '';
    if (params.with_original_language) {
      // https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
      api = `/${type}/${routerName}?api_key=&language=en-US&page=${params.page}&with_original_language=${params.with_original_language}`;
    } else {
      api = `/${type}/${routerName}?api_key=&language=en-US&page=${params.page}`;
    }
    return this.http.get<IMovieDetails>(api);
  }

  getTrendingCharts(): any {
    return this.http.get(`/trending/all/day?api_key=`);
  }

  getDetails(id, type: Type): any {
    return this.http.get(`/${type}/${id}?api_key=&language=en-US&append_to_response=videos`);
  }

  getMovieCast(id): any {
    return this.http.get(`/movie/${id}/credits?api_key=`);
  }

  getLatest(type: Type): any {
    return this.http.get(`/${type}/latest?api_key=&language=en-US`);
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

  similar(id, page, type): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`/${type}/${id}/similar?page=${page}&api_key=&language=en-US`);
  }
  moviesReviews(id, page): Observable<any> {
    return this.http.get<IMovieDetails>(`/movie/${id}/reviews?api_key=&page=${page}&language=en-US`);
  }
}
