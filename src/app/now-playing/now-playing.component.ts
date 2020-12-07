import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ILocalParams, RouterNames } from '../model/models';
import { IMovieDetails } from '../model/movie.d';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  routeName: RouterNames = 'nowplayingmovies';
  $nowPlayingMovies: Observable<IMovieDetails>;

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
  nextOrPreviousPage(d): void {
    this.router.navigate([this.routeName], { queryParams: { page: d } });
  }
  pageChange(d): void {
    this.$nowPlayingMovies = this.movieService.getNowPlayingMovies(d);
  }

}
