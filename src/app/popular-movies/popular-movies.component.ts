import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  routeName='popularmovies'
  $popularMovies:Observable<any>;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.pageChange(1);
    // this.$popularMovies = this.movieService.getPopularMovies(1);
  }
  pageChange(d:number){
    this.$popularMovies = this.movieService.getPopularMovies(d);
  }

  // getMovieDetails(id){
  //   this.movieService.getMovieDetails(id).toPromise().then(movie=>{
  //     console.log(movie)
  //   })
  // }

}
