import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILocalParams, RouterNames } from '../model/models';
// import { IMovieDetails } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-popular-tv-show',
  templateUrl: './popular-tv-show.component.html',
  styleUrls: ['./popular-tv-show.component.scss']
})
export class PopularTvShowComponent implements OnInit {

  routeName: RouterNames = 'popular-tv-shows';
  $popularMovies: Observable<any>;

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
    this.$popularMovies = this.movieService.getPopularTvShows(Obj);
  }
}
