import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  routeName='topratedmovies'
  $topRatedMovies:Observable<any>;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.pageChange(1);
    // this.$popularMovies = this.movieService.getPopularMovies(1);
  }
  pageChange(d){
    this.$topRatedMovies = this.movieService.getPopularMovies(d);
    this.$topRatedMovies.toPromise().then(data=>{
      console.log(data)
    })
  }

}
