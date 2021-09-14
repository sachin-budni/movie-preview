import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILocalParams, RouterNames } from 'src/app/model/models';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.scss']
})
export class TvListComponent implements OnInit {

  routeName: RouterNames = 'popular';
  $movieList: Observable<any>;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): any {
    this.routeName = ((this.route.data as any).getValue()?.title) as RouterNames;
    this.route.queryParams.subscribe((params: ILocalParams) => {
      if (params.page || params.language) {
        this.pageChange(params);
      } else {
        this.router.navigate([`tv/${this.routeName}`], { queryParams: { page: 1 } });
      }
    });
  }

  nextOrPreviousPage(d): void {
    const param = typeof d === 'number' ? { page: d } : d;
    this.router.navigate([`tv/${this.routeName}`], { queryParams: param });
  }

  pageChange(params: ILocalParams): any {
    const Obj = this.movieService.convertLanguageObj(params);
    this.switchMovieList(Obj);
  }
  switchMovieList(Obj: any): void {
    switch (this.routeName) {
      case 'upcoming':
        this.$movieList = this.movieService.getList('tv', 'on_the_air', Obj);
        break;
      case 'top-rated':
        this.$movieList = this.movieService.getList('tv', 'top_rated', Obj);
        break;
      case 'now-playing':
        this.$movieList = this.movieService.getList('tv', 'airing_today', Obj);
        break;
      default:
        this.$movieList = this.movieService.getList('tv', this.routeName, Obj);
        break;
    }
  }
}
