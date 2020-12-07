import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterNames } from '../model/models';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss']
})
export class LatestMoviesComponent implements OnInit {
  routeName: RouterNames = 'popularmovies';
  $latestMovies: Observable<any>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.pageChange();
  }
  pageChange(): void {
    this.$latestMovies = this.movieService.getLatestMovies();
  }
}
