import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss']
})
export class LatestMoviesComponent implements OnInit {
  routeName = 'popularmovies';
  $latestMovies: Observable<any>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.pageChange();
  }
  pageChange() {
    this.$latestMovies = this.movieService.getLatestMovies();
  }
}
