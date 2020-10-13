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
    this.route.queryParams.subscribe(params => {
      if (params.page) {
        this.pageChange(params.page);
      } else {
        this.router.navigate(['topratedmovies'], { queryParams: { page: 1 } });
      }
    });
  }
  nextOrPreviousPage(d) {
    this.router.navigate(['topratedmovies'], { queryParams: { page: d } });
  }
  pageChange(d) {
    this.$topRatedMovies = this.movieService.getTopRatedMovies(d);
  }

}
