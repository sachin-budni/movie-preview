import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovieDetails } from '../model/movie.d';
import { ILocalParams, RouterNames } from '../model/models';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  routeName: RouterNames = 'topratedmovies';
  $topRatedMovies: Observable<IMovieDetails>;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: ILocalParams) => {
      if (params.page) {
        this.pageChange(params.page);
      } else {
        this.router.navigate([this.routeName], { queryParams: { page: 1 } });
      }
    });
  }
  nextOrPreviousPage(d: number): void {
    this.router.navigate([this.routeName], { queryParams: { page: d } });
  }
  pageChange(d: number): void {
    this.$topRatedMovies = this.movieService.getTopRatedMovies(d);
  }

}
