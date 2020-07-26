import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  routeName = 'topratedmovies';
  $topRatedMovies: Observable<any>;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movieService.setTitle('Top-Rated Movies');
    this.route.queryParams.subscribe(params => {
      if (params.page) {
        this.pageChange(params.page);
      } else {
        this.router.navigate(['topratedmovies'], { queryParams: { page: 1 } });
      }
    });
    // this.pageChange(1);
    // this.$popularMovies = this.movieService.getPopularMovies(1);
  }
  pageChange(d) {
    this.$topRatedMovies = this.movieService.getPopularMovies(d);
  }

}
