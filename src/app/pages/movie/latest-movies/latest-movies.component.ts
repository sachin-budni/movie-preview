import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterNames, Type } from 'src/app/model/models';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss']
})
export class LatestMoviesComponent implements OnInit {
  routeName: RouterNames = 'popular';
  $latestMovies: Observable<any>;
  type: Type = 'movie';
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.pageChange();
  }
  pageChange(): void {
    this.$latestMovies = this.movieService.getLatest(this.type);
  }
}
