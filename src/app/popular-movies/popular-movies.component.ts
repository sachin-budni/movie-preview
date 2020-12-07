import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ILocalParams, RouterNames } from './../model/models';
import { IMovieDetails } from '../model/movie.d';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  routeName: RouterNames = 'popularmovies';
  $popularMovies: Observable<IMovieDetails>;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): any {
    this.route.queryParams.subscribe((params: ILocalParams) => {
      if (params.page || params.language) {
        this.pageChange(params);
      } else {
        this.router.navigate([this.routeName], { queryParams: { page: 1 } });
      }
    });
  }

  nextOrPreviousPage(d): void {
    const param = typeof d === 'number' ? { page: d } : d;
    this.router.navigate([this.routeName], { queryParams: param });
  }

  pageChange(params: ILocalParams): any {
    const Obj = this.movieService.convertLanguageObj(params);
    this.$popularMovies = this.movieService.getPopularMovies(Obj);
  }
}
