import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ILocalParams, RouterNames } from '../model/models';
import { IMovieDetails } from '../model/movie.d';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.scss']
})
export class UpcommingComponent implements OnInit {

  routeName: RouterNames = 'upcommingmovies';
  $upcommingMovies: Observable<IMovieDetails>;

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
    this.$upcommingMovies = this.movieService.getUpcommingMovies(d);
  }

}
