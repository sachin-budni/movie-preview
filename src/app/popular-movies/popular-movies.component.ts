import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  routeName = 'popularmovies';
  $popularMovies: Observable<any>;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.page || params.language) {
        this.pageChange(params);
      } else {
        this.router.navigate(['popularmovies'], { queryParams: { page: 1 } });
      }
    });
  }

  pageChange(params) {
    const paramObj = {} as any;
    if (params.language) {
      paramObj.with_original_language = params.language;
      paramObj.page = params.page;
    } else {
      paramObj.page = params.page;
    }
    this.$popularMovies = this.movieService.getPopularMovies(paramObj);
  }

}
