import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getPopularMovies(index):Observable<any>{
    let api = 'https://api.themoviedb.org/3/movie/popular?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40&language=en-US&page='+index
    return this.http.get(api);
  }

  getTrendingCharts(){
    return this.http.get("https://api.themoviedb.org/3/trending/all/day?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40");
  }

  getMovieDetails(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40&language=en-US`);
  }
  
  getTopRatedMovies(index){
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40&language=en-US&page=${index}`);
  }

  getUpcommingMovies(index){
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40&language=en-US&page=${index}`);
  }

  getLatestMovies(){
    return this.http.get(`https://api.themoviedb.org/3/movie/latest?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40&language=en-US`);
  }

  getNowPlayingMovies(index){
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40&language=en-US&page=${index}`);
  }
}
