import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss']
})
export class LatestMoviesComponent implements OnInit {
  routeName='popularmovies'
  $latestMovies:Observable<any>;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.pageChange();
    // this.$popularMovies = this.movieService.getPopularMovies(1);
  }
  pageChange(){
    this.$latestMovies = this.movieService.getLatestMovies();
    this.$latestMovies.toPromise().then(data=>{
      console.log(data)
    })
  }
}
